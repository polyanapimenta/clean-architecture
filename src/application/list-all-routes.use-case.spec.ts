import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";
import { ListAllRoutesUseCase } from "./list-all-routes.use-case";

describe("ListAllRoutesUseCase Test", () => { 
  it("Should list all routes", async () => {
    const repository = new RouteInMemoryRepository();
    
    const createUseCase = new CreateRouteUseCase(repository);

    const createOutput = await createUseCase.execute({
      title: "my title",
      startPosition: {lat: 1, lng: 2},
      endPosition: {lat: 3, lng: 4},
    });

    const listAllUseCase = new ListAllRoutesUseCase(repository);

    const listOutput = await listAllUseCase.execute();

    expect(listOutput).toHaveLength(1);
    expect(listOutput).toStrictEqual([createOutput]);
  })
});
