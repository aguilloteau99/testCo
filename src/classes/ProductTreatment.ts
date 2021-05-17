export class ProductTreatment{
  private _productTreatmentId;
  private _productTreatmentDesignation;
  private _productTreatmentPriority;

  constructor() {
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

  get productTreatmentPriority() {
    return this._productTreatmentPriority;
  }

  set productTreatmentPriority(value) {
    this._productTreatmentPriority = value;
  }
}
