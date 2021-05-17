export class ProductEssence{
  private _productEssenceId;
  private _productEssenceDesignation;
  private _productEssencePriority;

  constructor() {
  }

  get productEssenceId() {
    return this._productEssenceId;
  }

  set productEssenceId(value) {
    this._productEssenceId = value;
  }

  get productEssenceDesignation() {
    return this._productEssenceDesignation;
  }

  set productEssenceDesignation(value) {
    this._productEssenceDesignation = value;
  }

  get productEssencePriority() {
    return this._productEssencePriority;
  }

  set productEssencePriority(value) {
    this._productEssencePriority = value;
  }
}
