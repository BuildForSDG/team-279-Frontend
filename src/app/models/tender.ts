export class Tender {
  constructor(
    public id: number,
    public tenderNumber: string = 'heyee',
    public tenderDescription: string,
    public category: string,
    public InstitutionContactPerson: string,
    public InstitutionPersonEmail: string,
    public InstitutionPersonPhone: string,
    public awardedPoint: string,
    public datePublished: string,
    public closingDate: string
  ) {  }
}
