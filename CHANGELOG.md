# Changelog

## 0.1.0 (2025-04-10)

Full Changelog: [v0.0.11...v0.1.0](https://github.com/plastic-labs/honcho-node/compare/v0.0.11...v0.1.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#83](https://github.com/plastic-labs/honcho-node/issues/83)) ([d9ac028](https://github.com/plastic-labs/honcho-node/commit/d9ac028963482e43105f9ed0e4714279b4488040))
* **api:** api update ([4cee1e2](https://github.com/plastic-labs/honcho-node/commit/4cee1e28b5f23d36fa222e0f37f96b87cf2fdde3))
* **client:** accept RFC6838 JSON content types ([#84](https://github.com/plastic-labs/honcho-node/issues/84)) ([ee43c1e](https://github.com/plastic-labs/honcho-node/commit/ee43c1e9eff4ea37d42595c5d33e07f2729b2008))
* **client:** send `X-Stainless-Timeout` header ([#79](https://github.com/plastic-labs/honcho-node/issues/79)) ([00e5a1b](https://github.com/plastic-labs/honcho-node/commit/00e5a1b1331f7f74a0c50d31845249498e9ee6bb))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#93](https://github.com/plastic-labs/honcho-node/issues/93)) ([09c8810](https://github.com/plastic-labs/honcho-node/commit/09c88106383ae86b5a63712a5dea06e7975bf0c3))
* avoid type error in certain environments ([#89](https://github.com/plastic-labs/honcho-node/issues/89)) ([bc95c28](https://github.com/plastic-labs/honcho-node/commit/bc95c28365af13f8602d8d627f3b63024c7a9ff9))
* **client:** fix export map for index exports ([#80](https://github.com/plastic-labs/honcho-node/issues/80)) ([50907d7](https://github.com/plastic-labs/honcho-node/commit/50907d7b14b30be3a52886a1ab82dbd69b1832a0))
* **client:** normalize method ([#73](https://github.com/plastic-labs/honcho-node/issues/73)) ([f89c690](https://github.com/plastic-labs/honcho-node/commit/f89c69087921faaa2a309e10b24001da094669c1))
* **client:** send `X-Stainless-Timeout` in seconds ([#91](https://github.com/plastic-labs/honcho-node/issues/91)) ([47583ae](https://github.com/plastic-labs/honcho-node/commit/47583ae8b8f5ff081e22673a83314bd12c388c04))
* **exports:** ensure resource imports don't require /index ([#86](https://github.com/plastic-labs/honcho-node/issues/86)) ([3d9947f](https://github.com/plastic-labs/honcho-node/commit/3d9947faf1f88c1f7d0465769406f94288d1893b))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#90](https://github.com/plastic-labs/honcho-node/issues/90)) ([12e4048](https://github.com/plastic-labs/honcho-node/commit/12e4048ed490cbc17d1ddb1a665201aa1423b64a))
* **mcp:** fix readEnv type error ([f072743](https://github.com/plastic-labs/honcho-node/commit/f07274316050f6e19d909a9a4ffc8888da993565))
* **mcp:** include all necessary env vars in client instantiation ([338bb06](https://github.com/plastic-labs/honcho-node/commit/338bb061669134d93c56fe4c321f0aa00d8a62c6))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#96](https://github.com/plastic-labs/honcho-node/issues/96)) ([82644c2](https://github.com/plastic-labs/honcho-node/commit/82644c2ba9621cfd7064411ebf0c4a40905eaf82))
* **mcp:** remove unused tools.ts ([#94](https://github.com/plastic-labs/honcho-node/issues/94)) ([eeeff4b](https://github.com/plastic-labs/honcho-node/commit/eeeff4b7cebf27c3a6080ef8abcce83fb47cf88e))


### Chores

* configure new SDK language ([#95](https://github.com/plastic-labs/honcho-node/issues/95)) ([25bd245](https://github.com/plastic-labs/honcho-node/commit/25bd245ff1f85a84fb92fc605a5a0b63ae48cb68))
* **exports:** cleaner resource index imports ([#87](https://github.com/plastic-labs/honcho-node/issues/87)) ([274a81f](https://github.com/plastic-labs/honcho-node/commit/274a81f8849164a972536deab341b0dd474e2b6d))
* **exports:** stop using path fallbacks ([#88](https://github.com/plastic-labs/honcho-node/issues/88)) ([8ad8649](https://github.com/plastic-labs/honcho-node/commit/8ad8649dc96a07446b69d61021af4d5781b78467))
* **internal:** add aliases for Record and Array ([#92](https://github.com/plastic-labs/honcho-node/issues/92)) ([2415a12](https://github.com/plastic-labs/honcho-node/commit/2415a121459b6a33ffdd85173ca5816ced46fb77))
* **internal:** codegen related update ([#74](https://github.com/plastic-labs/honcho-node/issues/74)) ([6e6fc48](https://github.com/plastic-labs/honcho-node/commit/6e6fc489de03c68bd34c127b4aaf8b9410fd9660))
* **internal:** codegen related update ([#75](https://github.com/plastic-labs/honcho-node/issues/75)) ([a990584](https://github.com/plastic-labs/honcho-node/commit/a9905846585c804528d9c668c6e35799de317557))
* **internal:** codegen related update ([#76](https://github.com/plastic-labs/honcho-node/issues/76)) ([0295117](https://github.com/plastic-labs/honcho-node/commit/0295117eb4af398dcbea2b9c06a633612b25eeec))
* **internal:** codegen related update ([#77](https://github.com/plastic-labs/honcho-node/issues/77)) ([3805b01](https://github.com/plastic-labs/honcho-node/commit/3805b015a510610d95a18b21a272c2fe022574ba))
* **internal:** codegen related update ([#78](https://github.com/plastic-labs/honcho-node/issues/78)) ([e81efbd](https://github.com/plastic-labs/honcho-node/commit/e81efbdd710e9077b0e34d75999edbab0e50cdfe))
* **internal:** fix devcontainers setup ([#81](https://github.com/plastic-labs/honcho-node/issues/81)) ([df524fb](https://github.com/plastic-labs/honcho-node/commit/df524fbe0ecbf91ce66cab1833d426499753b01c))
* **internal:** fix some typos ([#71](https://github.com/plastic-labs/honcho-node/issues/71)) ([819389e](https://github.com/plastic-labs/honcho-node/commit/819389ed8fedb1c9116d5bfdd180adc9a7d5cf7b))
* **internal:** reduce CI branch coverage ([2de3294](https://github.com/plastic-labs/honcho-node/commit/2de3294240ac1accd271954cc6fdf92e2ee3dc85))
* **internal:** remove extra empty newlines ([#85](https://github.com/plastic-labs/honcho-node/issues/85)) ([60d7b49](https://github.com/plastic-labs/honcho-node/commit/60d7b4970e4b912c955481016c80448f1ab320a3))
* **internal:** upload builds and expand CI branch coverage ([0fa4b4d](https://github.com/plastic-labs/honcho-node/commit/0fa4b4d3a77b3cbbe20484f1c703d99198174af0))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#82](https://github.com/plastic-labs/honcho-node/issues/82)) ([2cbe007](https://github.com/plastic-labs/honcho-node/commit/2cbe007f5e7fa8246e4b115dbefee3169dbe2cbc))

## 0.0.11 (2024-12-16)

Full Changelog: [v0.0.10...v0.0.11](https://github.com/plastic-labs/honcho-node/compare/v0.0.10...v0.0.11)

### Features

* **api:** api update ([#69](https://github.com/plastic-labs/honcho-node/issues/69)) ([e935432](https://github.com/plastic-labs/honcho-node/commit/e935432f477a0db8c40f0938a7189e84095c7270))
* **internal:** make git install file structure match npm ([#64](https://github.com/plastic-labs/honcho-node/issues/64)) ([c2a3286](https://github.com/plastic-labs/honcho-node/commit/c2a3286747f151076c5df328b1d15a395f698ca4))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#66](https://github.com/plastic-labs/honcho-node/issues/66)) ([6abb709](https://github.com/plastic-labs/honcho-node/commit/6abb709d0c7ffac23c4c011f5923827576e68664))
* **internal:** remove unnecessary getRequestClient function ([#65](https://github.com/plastic-labs/honcho-node/issues/65)) ([cd1b27d](https://github.com/plastic-labs/honcho-node/commit/cd1b27d490ce16f14354a89086335a563f2df397))
* **internal:** update isAbsoluteURL ([#68](https://github.com/plastic-labs/honcho-node/issues/68)) ([0f35089](https://github.com/plastic-labs/honcho-node/commit/0f35089c96f38becbedfef37d51287a797d21cfe))
* remove redundant word in comment ([#63](https://github.com/plastic-labs/honcho-node/issues/63)) ([aa824a1](https://github.com/plastic-labs/honcho-node/commit/aa824a1e3ad5463452d4077d7473b1525bf238ce))
* **types:** nicer error class types + jsdocs ([#67](https://github.com/plastic-labs/honcho-node/issues/67)) ([3a5c429](https://github.com/plastic-labs/honcho-node/commit/3a5c429e2e632e07558fd077da614c5bc4fb145b))


### Documentation

* remove suggestion to use `npm` call out ([#61](https://github.com/plastic-labs/honcho-node/issues/61)) ([a269625](https://github.com/plastic-labs/honcho-node/commit/a269625dda4700b9878aa2a55ab1834664c19f91))

## 0.0.10 (2024-11-15)

Full Changelog: [v0.0.9...v0.0.10](https://github.com/plastic-labs/honcho-node/compare/v0.0.9...v0.0.10)

### Features

* **api:** api update ([#59](https://github.com/plastic-labs/honcho-node/issues/59)) ([aeac0e4](https://github.com/plastic-labs/honcho-node/commit/aeac0e4110048c0860c984b92a2401eb34a13b8a))


### Chores

* rebuild project due to codegen change ([#56](https://github.com/plastic-labs/honcho-node/issues/56)) ([126da8f](https://github.com/plastic-labs/honcho-node/commit/126da8f6c1b627b19a7b4900ad8a84c19da6799d))
* rebuild project due to codegen change ([#58](https://github.com/plastic-labs/honcho-node/issues/58)) ([3e76822](https://github.com/plastic-labs/honcho-node/commit/3e768223717585f365825ced6c88bb33f7cd8ddb))

## 0.0.9 (2024-11-08)

Full Changelog: [v0.0.8...v0.0.9](https://github.com/plastic-labs/honcho-node/compare/v0.0.8...v0.0.9)

### Bug Fixes

* **api:** swap package name back ([982e6e4](https://github.com/plastic-labs/honcho-node/commit/982e6e45c32d24ae98054b4a2ae0a65652c0a812))

## 0.0.8 (2024-11-07)

Full Changelog: [v0.1.0...v0.0.8](https://github.com/plastic-labs/honcho-node/compare/v0.1.0...v0.0.8)

### Features

* **api:** Add cloning feature ([#48](https://github.com/plastic-labs/honcho-node/issues/48)) ([e1c2a1a](https://github.com/plastic-labs/honcho-node/commit/e1c2a1a94e7c1123c25ce36e71ecf3fe26e15185))
* **api:** update via SDK Studio ([477affd](https://github.com/plastic-labs/honcho-node/commit/477affdce431e0a3cfab0a89ed82d0a4d671cea5))
* **api:** update via SDK Studio ([f89689e](https://github.com/plastic-labs/honcho-node/commit/f89689ebdb4911691307b94b568fb6198526c479))
* **api:** update via SDK Studio ([048f079](https://github.com/plastic-labs/honcho-node/commit/048f0795a97dd4cef5c38cd1c806451ef9deec34))
* **api:** update via SDK Studio ([751cfec](https://github.com/plastic-labs/honcho-node/commit/751cfec21f9c88b3155bda870feef0d80672749d))
* **api:** update via SDK Studio ([39b1bdf](https://github.com/plastic-labs/honcho-node/commit/39b1bdfc363bedc97cf525a51c5d6217456f15fe))
* **api:** update via SDK Studio ([a11e02e](https://github.com/plastic-labs/honcho-node/commit/a11e02ee566310082ea0aea49ba89de7cf58e27e))
* **api:** update via SDK Studio ([0d0f698](https://github.com/plastic-labs/honcho-node/commit/0d0f69874484513a253134924e429da30d7c1bb5))
* **api:** update via SDK Studio ([0e24b7a](https://github.com/plastic-labs/honcho-node/commit/0e24b7a6e9a67c894da3f5ae9061216e60e5d9b0))
* **api:** update via SDK Studio ([6f4ae87](https://github.com/plastic-labs/honcho-node/commit/6f4ae87cffe7a3634516a131d96827991228579d))
* **api:** update via SDK Studio ([1a2fb6f](https://github.com/plastic-labs/honcho-node/commit/1a2fb6fcf78cbfe14a7919c7d32816a12ab4e4f9))
* **api:** update via SDK Studio ([34ea231](https://github.com/plastic-labs/honcho-node/commit/34ea231a852f513b536fbf9068147f301bfe9180))
* **api:** update via SDK Studio ([351afe1](https://github.com/plastic-labs/honcho-node/commit/351afe16e68ddc044057358a2dcd55fbd79cb151))
* **api:** update via SDK Studio ([85b3685](https://github.com/plastic-labs/honcho-node/commit/85b368508e3c201197db5dd3fc45f018f8f2e512))


### Chores

* **internal:** version bump ([#51](https://github.com/plastic-labs/honcho-node/issues/51)) ([ad985a4](https://github.com/plastic-labs/honcho-node/commit/ad985a422a3c44b72cd60d85c11dd824f139d0fb))
* rebuild project due to codegen change ([#46](https://github.com/plastic-labs/honcho-node/issues/46)) ([7ffa4fd](https://github.com/plastic-labs/honcho-node/commit/7ffa4fdc087e8d1dfdca475905c1cd081331d66e))
* update SDK settings ([0a7f648](https://github.com/plastic-labs/honcho-node/commit/0a7f648b3ec320898b8a8e60d6129ec4312b0d5f))

## 0.1.0 (2024-11-07)

Full Changelog: [v0.0.7...v0.1.0](https://github.com/plastic-labs/honcho-node/compare/v0.0.7...v0.1.0)

### Features

* **api:** Add cloning feature ([#48](https://github.com/plastic-labs/honcho-node/issues/48)) ([54d640b](https://github.com/plastic-labs/honcho-node/commit/54d640b19ca9609d80eb2061e7bb0d62eacee395))


### Chores

* rebuild project due to codegen change ([#46](https://github.com/plastic-labs/honcho-node/issues/46)) ([d4f3332](https://github.com/plastic-labs/honcho-node/commit/d4f3332230439cf63e6b4b90602c63c94f04820d))

## 0.0.7 (2024-10-21)

Full Changelog: [v0.0.6...v0.0.7](https://github.com/plastic-labs/honcho-node/compare/v0.0.6...v0.0.7)

### Features

* **api:** api update ([#40](https://github.com/plastic-labs/honcho-node/issues/40)) ([404f89c](https://github.com/plastic-labs/honcho-node/commit/404f89cd152afcdd9a482ff9487c852298ff3ab9))
* **api:** api update ([#42](https://github.com/plastic-labs/honcho-node/issues/42)) ([d937f2d](https://github.com/plastic-labs/honcho-node/commit/d937f2dc21350a2f04f4385fc0e42b93c2f9acc2))
* **api:** api update ([#43](https://github.com/plastic-labs/honcho-node/issues/43)) ([4094526](https://github.com/plastic-labs/honcho-node/commit/4094526e55badf52050a5d486d7583ca2f489753))
* **api:** api update ([#44](https://github.com/plastic-labs/honcho-node/issues/44)) ([f36f035](https://github.com/plastic-labs/honcho-node/commit/f36f035b23769442fc8cb9102654d6494e1119a1))
* **api:** update via SDK Studio ([#35](https://github.com/plastic-labs/honcho-node/issues/35)) ([0fe4e34](https://github.com/plastic-labs/honcho-node/commit/0fe4e34b9adb0c6aefb97a7f86255f17ef07a605))


### Bug Fixes

* **errors:** pass message through to APIConnectionError ([#37](https://github.com/plastic-labs/honcho-node/issues/37)) ([099c25b](https://github.com/plastic-labs/honcho-node/commit/099c25b0a9bdfde9404f2760027c868f99565e3c))


### Chores

* better object fallback behaviour for casting errors ([#38](https://github.com/plastic-labs/honcho-node/issues/38)) ([3e16bc1](https://github.com/plastic-labs/honcho-node/commit/3e16bc162793c14e925f40868f85ec89bfda9c8f))
* **internal:** codegen related update ([#33](https://github.com/plastic-labs/honcho-node/issues/33)) ([9d50dfc](https://github.com/plastic-labs/honcho-node/commit/9d50dfc7b638295f9af0a11869fd47f4f319c4e5))
* **internal:** codegen related update ([#36](https://github.com/plastic-labs/honcho-node/issues/36)) ([dbade17](https://github.com/plastic-labs/honcho-node/commit/dbade177ef333f740138ff026a346a6e25bec229))


### Documentation

* update CONTRIBUTING.md ([#39](https://github.com/plastic-labs/honcho-node/issues/39)) ([0b370d5](https://github.com/plastic-labs/honcho-node/commit/0b370d587c6a73a78563f2faf807e2844fe9dc8f))

## 0.0.6 (2024-08-07)

Full Changelog: [v0.0.5...v0.0.6](https://github.com/plastic-labs/honcho-node/compare/v0.0.5...v0.0.6)

### Chores

* **internal:** codegen related update ([#30](https://github.com/plastic-labs/honcho-node/issues/30)) ([42b6a61](https://github.com/plastic-labs/honcho-node/commit/42b6a616180b26771390f681c2c3d68c8c60ac50))

## 0.0.5 (2024-08-01)

Full Changelog: [v0.0.4...v0.0.5](https://github.com/plastic-labs/honcho-node/compare/v0.0.4...v0.0.5)

### Features

* **api:** OpenAPI spec update via Stainless API ([#24](https://github.com/plastic-labs/honcho-node/issues/24)) ([f1760b0](https://github.com/plastic-labs/honcho-node/commit/f1760b014808b25acacea1dbe58d0e67e78b0709))
* **api:** update via SDK Studio ([#19](https://github.com/plastic-labs/honcho-node/issues/19)) ([d58ce64](https://github.com/plastic-labs/honcho-node/commit/d58ce641232a10967d41d45be9ff159f3c6f1583))
* **api:** update via SDK Studio ([#25](https://github.com/plastic-labs/honcho-node/issues/25)) ([d2b2c76](https://github.com/plastic-labs/honcho-node/commit/d2b2c76c4a28c3f2452492aedb240d563f33238c))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#21](https://github.com/plastic-labs/honcho-node/issues/21)) ([697784b](https://github.com/plastic-labs/honcho-node/commit/697784bdd6d64b700cdc6ab1572a4ad130725d6b))


### Chores

* **ci:** correctly tag pre-release npm packages ([#27](https://github.com/plastic-labs/honcho-node/issues/27)) ([1f718ec](https://github.com/plastic-labs/honcho-node/commit/1f718eccfe135dc2bad1f9c31a43d1014e3831be))
* **docs:** fix incorrect client var names ([#22](https://github.com/plastic-labs/honcho-node/issues/22)) ([b19d486](https://github.com/plastic-labs/honcho-node/commit/b19d4865708dee7c6f5ac0af9ad74487709554e7))
* **internal:** add constant for default timeout ([#23](https://github.com/plastic-labs/honcho-node/issues/23)) ([67519e0](https://github.com/plastic-labs/honcho-node/commit/67519e0ebfbf52350f0dcbfd4b699285d5b765ec))
* **internal:** codegen related update ([#16](https://github.com/plastic-labs/honcho-node/issues/16)) ([8fd8961](https://github.com/plastic-labs/honcho-node/commit/8fd89613e59d87ecd9bf6822d69dc01e17cba411))
* **internal:** codegen related update ([#26](https://github.com/plastic-labs/honcho-node/issues/26)) ([5f40103](https://github.com/plastic-labs/honcho-node/commit/5f40103250bd1c732e9cd0e99c8f06e41f088a08))
* **internal:** codegen related update ([#28](https://github.com/plastic-labs/honcho-node/issues/28)) ([a87faf6](https://github.com/plastic-labs/honcho-node/commit/a87faf690c13f796027a92a18e8759846997aa8d))
* **tests:** update prism version ([#18](https://github.com/plastic-labs/honcho-node/issues/18)) ([09748fe](https://github.com/plastic-labs/honcho-node/commit/09748fe2cec34eb7c7d7ed1f839212e4c65642ea))

## 0.0.4 (2024-05-23)

Full Changelog: [v0.0.3...v0.0.4](https://github.com/plastic-labs/honcho-node/compare/v0.0.3...v0.0.4)

### Features

* **api:** update via SDK Studio ([#13](https://github.com/plastic-labs/honcho-node/issues/13)) ([40a8a98](https://github.com/plastic-labs/honcho-node/commit/40a8a98bfca8d9603d37109c98868ddacdace65b))

## 0.0.3 (2024-05-23)

Full Changelog: [v0.0.2...v0.0.3](https://github.com/plastic-labs/honcho-node/compare/v0.0.2...v0.0.3)

### Features

* **api:** OpenAPI spec update via Stainless API ([#10](https://github.com/plastic-labs/honcho-node/issues/10)) ([b523d40](https://github.com/plastic-labs/honcho-node/commit/b523d4033e9aa50a20ba2beb3de697a6caa91ad3))
* **api:** update via SDK Studio ([#11](https://github.com/plastic-labs/honcho-node/issues/11)) ([5ac8ff6](https://github.com/plastic-labs/honcho-node/commit/5ac8ff630c010182ab7a69e24f57ccd0b345b270))
* **api:** update via SDK Studio ([#9](https://github.com/plastic-labs/honcho-node/issues/9)) ([3f05b53](https://github.com/plastic-labs/honcho-node/commit/3f05b53412e8fee6e9ac993369c14dcb6a59146d))


### Chores

* **internal:** version bump ([#7](https://github.com/plastic-labs/honcho-node/issues/7)) ([917efc4](https://github.com/plastic-labs/honcho-node/commit/917efc407618b3fda49db2b0e429d461b1cca964))

## 0.0.2 (2024-05-16)

Full Changelog: [v0.0.2-alpha.1...v0.0.2](https://github.com/plastic-labs/honcho-node/compare/v0.0.2-alpha.1...v0.0.2)

### Features

* **api:** update via SDK Studio ([#4](https://github.com/plastic-labs/honcho-node/issues/4)) ([b9223aa](https://github.com/plastic-labs/honcho-node/commit/b9223aad8c83294ee36e3f4ef94bb7e2f28195a6))
* **api:** update via SDK Studio ([#6](https://github.com/plastic-labs/honcho-node/issues/6)) ([ed38967](https://github.com/plastic-labs/honcho-node/commit/ed3896777309256f7387c2e19471a6b81567fd9a))

## 0.0.2-alpha.1 (2024-05-09)

Full Changelog: [v0.0.1-alpha.0...v0.0.2-alpha.1](https://github.com/plastic-labs/honcho-node/compare/v0.0.1-alpha.0...v0.0.2-alpha.1)

### Features

* **api:** OpenAPI spec update via Stainless API ([#3](https://github.com/plastic-labs/honcho-node/issues/3)) ([92d65ac](https://github.com/plastic-labs/honcho-node/commit/92d65acee1b967d4a559ab2b4a5e9372f3637b91))
* **api:** update via SDK Studio ([477affd](https://github.com/plastic-labs/honcho-node/commit/477affdce431e0a3cfab0a89ed82d0a4d671cea5))
* **api:** update via SDK Studio ([f89689e](https://github.com/plastic-labs/honcho-node/commit/f89689ebdb4911691307b94b568fb6198526c479))
* **api:** update via SDK Studio ([048f079](https://github.com/plastic-labs/honcho-node/commit/048f0795a97dd4cef5c38cd1c806451ef9deec34))
* **api:** update via SDK Studio ([751cfec](https://github.com/plastic-labs/honcho-node/commit/751cfec21f9c88b3155bda870feef0d80672749d))
* **api:** update via SDK Studio ([39b1bdf](https://github.com/plastic-labs/honcho-node/commit/39b1bdfc363bedc97cf525a51c5d6217456f15fe))
* **api:** update via SDK Studio ([a11e02e](https://github.com/plastic-labs/honcho-node/commit/a11e02ee566310082ea0aea49ba89de7cf58e27e))
* **api:** update via SDK Studio ([0d0f698](https://github.com/plastic-labs/honcho-node/commit/0d0f69874484513a253134924e429da30d7c1bb5))
* **api:** update via SDK Studio ([0e24b7a](https://github.com/plastic-labs/honcho-node/commit/0e24b7a6e9a67c894da3f5ae9061216e60e5d9b0))
* **api:** update via SDK Studio ([6f4ae87](https://github.com/plastic-labs/honcho-node/commit/6f4ae87cffe7a3634516a131d96827991228579d))
* **api:** update via SDK Studio ([1a2fb6f](https://github.com/plastic-labs/honcho-node/commit/1a2fb6fcf78cbfe14a7919c7d32816a12ab4e4f9))
* **api:** update via SDK Studio ([34ea231](https://github.com/plastic-labs/honcho-node/commit/34ea231a852f513b536fbf9068147f301bfe9180))
* **api:** update via SDK Studio ([351afe1](https://github.com/plastic-labs/honcho-node/commit/351afe16e68ddc044057358a2dcd55fbd79cb151))
* **api:** update via SDK Studio ([85b3685](https://github.com/plastic-labs/honcho-node/commit/85b368508e3c201197db5dd3fc45f018f8f2e512))
* **api:** update via SDK Studio ([#1](https://github.com/plastic-labs/honcho-node/issues/1)) ([9531c0e](https://github.com/plastic-labs/honcho-node/commit/9531c0ea806202b70bc7a96752cd6e74a05b161b))


### Chores

* update SDK settings ([0a7f648](https://github.com/plastic-labs/honcho-node/commit/0a7f648b3ec320898b8a8e60d6129ec4312b0d5f))
