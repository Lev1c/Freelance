import photo1 from '../assets/group/Group.png'
import photo2 from '../assets/group/Group2.png'
import photo3 from '../assets/group/Group3.png'


function Footer() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/pdf/Footer.pdf"; // Замените на путь к вашему PDF-файлу
        link.download = "document.pdf"; // Имя файла, какое вы хотите, чтобы было сохранено
        link.click();
      };

      const handleDownloadTwo = () => {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/pdf/EnablingPartnerships.pdf"; // Замените на путь к вашему PDF-файлу
        link.download = "EnablingPartnerships.pdf"; // Имя файла, какое вы хотите, чтобы было сохранено
        link.click();
      };
      const handleDownloadThree = () => {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/pdf/PrivacyPolicy.pdf"; // Замените на путь к вашему PDF-файлу
        link.download = "PrivacyPolicy.pdf"; // Имя файла, какое вы хотите, чтобы было сохранено
        link.click();
      };
      const handleDownloadFo = () => {
        const link = document.createElement("a");
        link.href = process.env.PUBLIC_URL + "/pdf/GeneralTerms.pdf"; // Замените на путь к вашему PDF-файлу
        link.download = "GeneralTerms.pdf"; // Имя файла, какое вы хотите, чтобы было сохранено
        link.click();
      };
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-block">
                    <ul className="footer-ul">
                        <li className="footer-item-one">Заказчику</li>
                        <li className="footer-item"><button onClick={handleDownload}>Что требуется для начала работы с Вашим сервисом?</button></li>
                        <li className="footer-item"><button onClick={handleDownload}>Как вы проверяете исполнителей?</button></li>
                        <li className="footer-item"><button onClick={handleDownload}>Сколько стоит использование вашей платформы?</button></li>
                    </ul>
                    <ul className="footer-ul">
                        <li className="footer-item-one">Фрилансеру</li>
                        <li className="footer-item"><button onClick={handleDownload}>Кто такие самозанятые и кто может получить этот статус?</button></li>
                        <li className="footer-item"><button onClick={handleDownload}>Как мне стать самозанятым?</button></li>
                        <li className="footer-item"><button onClick={handleDownload}>Какие отчисления я, как самозанятый должен оплачивать работая с Вашим сервисом?</button></li>
                        <li className="footer-item"><button onClick={handleDownload}>Сколько стоит использование вашей платформы?</button></li>
                    </ul>
                    <ul className="footer-ul" id='mobile-footer'>
                        <li className="footer-item-one">О платформе</li>
                        <li className="footer-item"><button onClick={handleDownloadTwo}>Подключение партнерства</button></li>
                        <li className="footer-item"><button onClick={handleDownloadThree}>Политика конфиденциальности</button></li>
                        <li className="footer-item"><button onClick={handleDownloadFo}>Общие условия использования Сервиса</button></li>
                    </ul>
                    <div className='mobile-footer'>
                        <h1 className='footer-item-two'>Мы в соц сетях</h1>
                        <a href='/'><img src={photo1} alt='des' className='link-photo'/></a>
                        <a href='/'><img src={photo2} alt='des' className='link-photo'/></a>
                        <a href='/'><img src={photo3} alt='des' className='link-photo'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;