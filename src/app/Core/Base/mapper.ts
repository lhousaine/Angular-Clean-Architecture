export abstract class Mapper<I, O, ID> {
  abstract mapFrom(param: I): O;
  abstract mapTo(param: O, id: ID): I;
}
