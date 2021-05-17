export class Product{
  private _productId;
  private _productReference;
  private _productDesignation;
  private _productFamilyId;
  private _productFamilyDesignation;
  private _productEssenceId;
  private _productEssenceDesignation;
  private _productTreatmentId;
  private _productTreatmentDesignation;
  private _productVarietyId;
  private _productVarietyDesignation;

  constructor() {
  }

  get productId() {
    return this._productId;
  }

  set productId(value) {
    this._productId = value;
  }

  get productReference() {
    return this._productReference;
  }

  set productReference(value) {
    this._productReference = value;
  }

  get productDesignation() {
    return this._productDesignation;
  }

  set productDesignation(value) {
    this._productDesignation = value;
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

  get productTreatmentId() {
    return this._productTreatmentId;
  }

  set productTreatmentId(value) {
    this._productTreatmentId = value;
  }

  get productTreatmentDesignation() {
    return this._productTreatmentDesignation;
  }

  set productTreatmentDesignation(value) {
    this._productTreatmentDesignation = value;
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

  fromJSON(productJSON: any){
    let p = this;
    p.productId = productJSON.productId;
    p.productReference = productJSON.productReference;
    p.productDesignation = productJSON.productDesignation;
    p.productFamilyId = productJSON.productFamilyId;
    p.productFamilyDesignation = productJSON.productFamilyDesignation;
    p.productEssenceId = productJSON.productEssenceId;
    p.productEssenceDesignation = productJSON.productEssenceDesignation;
    p.productTreatmentId = productJSON.productTreatmentId;
    p.productTreatmentDesignation = productJSON.productTreatmentDesignation;
    p.productVarietyId = productJSON.productVarietyId;
    p.productVarietyDesignation = productJSON.productVarietyDesignation;
    return p;
  }
}
