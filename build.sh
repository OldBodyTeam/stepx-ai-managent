#!/bin/bash
set -e
git pull
pnpm run build

pm2 reload 0
