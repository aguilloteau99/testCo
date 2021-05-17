export class ProductVariety{
  private _productVarietyId;
  private _productVarietyDesignation;
  private _productVarietyPriority;

  constructor() {
  }

  get productVarietyId() {
    return this._productVarietyId;
  }

  set productVarietyId(value) {
    this._productVarietyId = value;
  }

  get productVarietyDesignation() {
    return this._productVarietyDesignation;
  }

  set productVarietyDesignation(value) {
    this._productVarietyDesignation = value;
  }

  get productVarietyPriority() {
    return this._productVarietyPriority;
  }

  set productVarietyPriority(value) {
    this._productVarietyPriority = value;
  }
}
