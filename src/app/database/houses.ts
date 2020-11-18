class Houses {
  private houses: Array<string>;

  constructor() {
    this.houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  }

  public getHouses(): string[] {
    return this.houses;
  }
}

export default new Houses();
