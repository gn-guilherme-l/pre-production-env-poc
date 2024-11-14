# Test dynamic envs

## Running `production` env

```bash
$ ENVIRONMENT=production yarn -s run start:production
```

```text
HOST https://production.example.com
FROM_FILE .env.production
```

## Running `pre-production` env

```bash
$ ENVIRONMENT=pre-production yarn -s run start:production
```

```text
HOST https://pre-production.example.com
FROM_FILE .env.production
```

## Defaults for `staging` env

```bash
$ yarn -s run start:production
```

```text
HOST https://staging.example.com
FROM_FILE .env.staging
```
