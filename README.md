
# DeutschlandAPI SDK

This SDK helps to access the [DeutschlandAPI](https://deutschland-api.dev)

## Usage

The following example shows how you initialize the client:

```typescript
const client = Client::buildAnonymous();
const collection = client.state().getAll();

collection.getEntries().forEach((state: State) => {
    console.log(city.name);
});

```

More information about the complete API at:
https://app.typehub.cloud/d/deutschland-api/sdk
