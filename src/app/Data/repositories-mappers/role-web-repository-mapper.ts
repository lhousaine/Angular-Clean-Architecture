import {Mapper} from '../../Core/Base/mapper';
import {RoleWebEntity} from '../Entities/Role-web-entity';
import {RoleModel} from '../../Core/Domain/Role.model';

export class RoleWebRepositoryMapper extends Mapper<RoleWebEntity, RoleModel> {
  mapFrom(param: RoleWebEntity): RoleModel {
    return {
      name: param.name
    };
  }

  mapTo(param: RoleModel): RoleWebEntity {
    return {
      id: 0,
      name: param.name
    };
  }
}
