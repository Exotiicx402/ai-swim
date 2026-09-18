import { test } from "node:test";
import assert from "node:assert/strict";
// @ts-expect-error Node's test runner executes the TypeScript source directly.
import { meetsHoldingRequirement } from "../lib/holders/balance.ts";
const owner = "owner";
const mint = "mint";
const account = (amount: string, wallet = owner, token = mint) => ({ account: { data: { parsed: { type: "account", info: { owner: wallet, mint: token, tokenAmount: { amount } } } } } });
const response = (...accounts: unknown[]) => ({ result: { value: accounts } });
test("no accounts and zero balances cannot unlock access", () => {
  assert.equal(meetsHoldingRequirement(response(), owner, mint, "1"), false);
  assert.equal(meetsHoldingRequirement(response(account("0")), owner, mint, "1"), false);
});
test("aggregates accounts and checks exact raw thresholds without floating-point loss", () => {
  assert.equal(meetsHoldingRequirement(response(account("9007199254740993"), account("7")), owner, mint, "9007199254741000"), true);
  assert.equal(meetsHoldingRequirement(response(account("9007199254740993"), account("7")), owner, mint, "9007199254741001"), false);
});
test("wrong owner, mint, malformed data, and RPC errors fail closed", () => {
  for (const invalid of [response(account("100", "someone-else")), response(account("100", owner, "other-mint")), response(account("1.2")), response(account("-1")), { error: { code: -32005 } }, {}, response({})]) {
    assert.throws(() => meetsHoldingRequirement(invalid, owner, mint, "1"));
  }
});
test("requires an explicitly positive integer minimum", () => {
  for (const minimum of ["", "0", "-1", "1.5", "1e6"]) assert.throws(() => meetsHoldingRequirement(response(account("100")), owner, mint, minimum));
});
