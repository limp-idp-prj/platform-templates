import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../src/app.js';

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { status: 'ok' });
});

test('GET / returns service info', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
  assert.ok(res.body.service);
});
