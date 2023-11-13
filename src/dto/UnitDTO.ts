import { IUnits, IUnitCost } from '@/types/Unit';
import { IUnitDTO, IUnitCostDTO } from '@/types/dto/UnitDTO';

class UnitDto {
  private data;
  constructor(data: IUnits) {
    this.data = data;
  }

  get units(): IUnitDTO[] {
    return this.data.units.map((unit) => {
      return {
        ...unit,
        movementRate: unit.movement_rate || null,
        hitPoints: unit.hit_points,
        lineOfSight: unit.line_of_sight,
        armorBonus: unit.armor_bonus || null,
        attackBonus: unit.attack_bonus || null,
        attackDelay: unit.attack_delay || null,
        blastRadius: unit.blast_radius,
        buildTime: unit.build_time || null,
        reloadTime: unit.reload_time || null,
        searchRadius: unit.search_radius || null,
        costs: this.buildUnitCostsArray(unit.cost || {})
      };
    });
  }

  private buildUnitCostsArray(cost: IUnitCost): IUnitCostDTO[] | null {
    const result: IUnitCostDTO[] = [];
    if (Object.keys(cost).length) {
      for (const [key, value] of Object.entries(cost)) {
        result.push({
          label: key.charAt(0).toUpperCase() + key.slice(1),
          name: key,
          value
        });
      }

      return result;
    }

    return null;
  }
}

export default UnitDto;
