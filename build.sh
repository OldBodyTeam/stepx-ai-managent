#!/bin/bash
set -e
pnpm install
pnpm run build

pm2 reload 0
