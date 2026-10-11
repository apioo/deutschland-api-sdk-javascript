
# deutschland-api-sdk-javascript

This [SDK](https://github.com/apioo/deutschland-api-sdk-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/deutschland-api/sdk

## Usage

```typescript
const client = Client::build('[access_token]');

// Returns user data of the current authenticated user.
const response = await client.authorization().getWhoami();

// Revoke the access token of the current authenticated user.
const response = await client.authorization().revoke();

// Returns available charging stations for a specific autobahn.
const response = await client.autobahn().charging_station().getAll("autobahn_id");

// Returns available closures for a specific autobahn.
const response = await client.autobahn().closure().getAll("autobahn_id");

// Returns all available autobahns.
const response = await client.autobahn().getAll();

// Returns available parking lorries for a specific autobahn.
const response = await client.autobahn().parking_lorry().getAll("autobahn_id");

// Returns available warnings for a specific autobahn.
const response = await client.autobahn().warning().getAll("autobahn_id");

// Returns expense for the provided year.
const response = await client.budget().expense().getAll("year");

// Returns income for the provided year.
const response = await client.budget().income().getAll("year");

// Returns all current members of the Bundesrat.
const response = await client.bundesrat().member().getAll();

// Returns a specific member of the Bundestag.
const response = await client.bundestag().member().get("member_id");

// Returns all current members of the Bundestag.
const response = await client.bundestag().member().getAll();

// Returns a specific city.
const response = await client.city().get("city_id");

// Returns all available cities.
const response = await client.city().getAll(1, "state", "district", "name", "zipCode");

// Returns a specific district.
const response = await client.district().get("district_id");

// Returns all available districts.
const response = await client.district().getAll(1, "state", "name");

// Returns all available hospitals.
const response = await client.hospital().getAll(1, "search");

// Returns all available jobs.
const response = await client.job().getAll(1, "search", "location", "employer");

// Returns meta information and links about the current installed Fusio version.
const response = await client.meta().getAbout();

// Returns all Tagesschau news.
const response = await client.news().getAll(1);

// Returns a specific state.
const response = await client.state().get("state_id");

// Returns all available states.
const response = await client.state().getAll(1, "name");

// Returns all available warnings from the modular warning system (MoWaS).
const response = await client.warning().getAll();
```
