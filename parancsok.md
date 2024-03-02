# Parancsok, kódrészletek

Ticket resource generálása:

```bash
nest g res tickets
```

Prisma és nestjs-prisma telepítése:

```bash
npm i -D prisma
npm i nestjs-prisma
```

Prisma init:

```bash
npx primsa init
```

séma változtatás után:

```bash
npx prisma migrate dev
```

első séma definiálsá után:

```bash
npm i @prisma/client
```

Pirsma schémában a datasource URL: `"postgresql://postgres:postgres@localhost:5432/ticketing?schema=public"`
