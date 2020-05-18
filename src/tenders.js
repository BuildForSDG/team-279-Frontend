import TenderService from './Services/TenderService';

const Tenders = async () => {
  TenderService.validate().then((res) => console.log(res));
};
export default Tenders;
