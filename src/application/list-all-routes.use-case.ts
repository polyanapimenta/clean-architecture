import { LatLng } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}


  async execute(): Promise<ListAllRoutesOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((route) => route.toJSON());
  }
}

type ListAllRoutesOutput = {
  id: string,
  title: string,
  startPosition: LatLng,
  endPosition: LatLng,
  points?: LatLng[],
};