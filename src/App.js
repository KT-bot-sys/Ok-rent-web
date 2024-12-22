import React from 'react';
import './App.css';
import rentBanner from './assets/ok_rent_banner.jpg';

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">租.事 — 專為房東打造的租賃資訊交流平台</h1>
        <p className="intro">
          您是否曾在租賃過程中遇到各種挑戰，卻苦無解決之道，甚至沒有平台可以讓你訴說您的困境呢？「租.事」App 為您提供一個專屬於房東的交流平台，讓您輕鬆分享和獲取租賃經驗，提升租賃品質，降低風險。
        </p>

        <section>
          <h2>1. 查詢租賃訊息</h2> 
          <p>
            在 App 中的「預警資訊」頁面，您可以透過手機電話、案件編號進行模糊搜尋，了解其他房東的租賃經驗分享，為您的租賃決策提供寶貴的參考。
          </p>
        </section>

        <section>
          <h2>2. 分享您的故事</h2>
          <p>
            如果您在租賃過程中有值得分享的經歷，歡迎投稿 Po 文記錄事件。在文章中，您可以添加圖片、描述情況，分享心得，幫助其他房東做出明智的選擇，同時也為了保證您個人的權益，本平台僅會紀錄您填寫的電話號碼，並產生對應的案件編號，不會對外暴露訊息。
          </p>
        </section>

        <section>
          <h2>3. 瀏覽豐富內容</h2>
          <p>
            瀏覽其他房東分享的租賃經驗，了解市場動態和常見問題，學習實用的租賃技巧，降低未來可能遇到的風險，或是參考其他房東解決問題的方案。
          </p>
        </section>

        <section className="highlight">
          <h2>為什麼選擇「租.事」？</h2>
          <ul>
            <li>
              <strong>資訊共享：</strong>匯聚全國房東的真實經驗，讓您不再孤軍奮戰。
            </li>
            <li>
              <strong>社群互動：</strong>與志同道合的房東交流，互相支持，共同成長。
            </li>
            <li>
              <strong>隱私保護：</strong>我們重視您的隱私，所有上傳的方案經過 https 加密處理，確保資料傳輸的安全。
            </li>
          </ul>
        </section>

        <section className="download">
          <h3>立即下載，提升您的租賃體驗！</h3>
          <p>
            別再讓租賃問題困擾您，加入「租.事」App，成為我們的一員，讓您的租賃之路更加順遂、安心！
          </p>
          <p>
            下載連結：請前往{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.example.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>{" "}
            或{" "}
            <a
              href="https://apps.apple.com/tw/app/%E7%A7%9F-%E4%BA%8B/id6738840601"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>{" "} 
            搜尋「租.事」即可下載（或點擊超連結）。
          </p>
        </section>
      </div>

      <div className='main-image'>
        <img 
            src={rentBanner} 
            alt="找租事 Logo"
            style={{ width: "100%", maxWidth: "700px"}}
          />
      </div>
        
      <footer>
        <div className="footer-links">
          <a href="https://hackmd.io/@EC0vpjl8R4WbCKv3fyg-ew/BJ0xsLw7ye" target="_blank" rel="noopener noreferrer">
            服務條款
          </a> 

          <a href="https://hackmd.io/@EC0vpjl8R4WbCKv3fyg-ew/rypmFLPmyg" target="_blank" rel="noopener noreferrer">
            免責聲明
          </a>
          <a href="https://hackmd.io/@EC0vpjl8R4WbCKv3fyg-ew/Hk5p9FxNJe" target="_blank" rel="noopener noreferrer">
            EUAL
          </a>
          <a href="https://hackmd.io/@EC0vpjl8R4WbCKv3fyg-ew/S1vls1sXkl" target="_blank" rel="noopener noreferrer">
            隱私權政策
          </a>
        </div>
        <p>
          聯繫我們：如有任何問題，歡迎隨時與我們聯繫，客服團隊將竭誠為您服務。
          <br />
          <strong>電子郵件：</strong>{" "}
          <a href="mailto:landlordprotectorservice@gmail.com">landlordprotectorservice@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;