export class ProductFamily{
  private _productFamilyId;
  private _productFamilyDesignation;
  private _productFamilyPriority;

  constructor() {
  }

  get productFamilyId() {
    return this._productFamilyId;
  }

  set productFamilyId(value) {
    this._productFamilyId = value;
  }

  get productFamilyDesignation() {
    return this._productFamilyDesignation;
  }

  set productFamilyDesignation(value) {
    this._productFamilyDesignation = value;
  }

  get productFamilyPriority() {
    return this._productFamilyPriority;
  }

  set productFamilyPriority(value) {
    this._productFamilyPriority = value;
  }
}
