<div class="post-body">
  <div id="links">
    <style>
      /* 用于大屏幕和小屏幕的通用样式 */
      .card {
        width: 45%;
        font-size: 1rem;
        padding: 10px 20px;
        border-radius: 4px;
        transition-duration: 0.15s;
        margin-bottom: 1rem;
        display: flex;
        color: inherit;
        text-decoration: none;
        border: none;
      }
      .card:nth-child(odd) {
        float: left;
      }
      .card:nth-child(even) {
        float: right;
      }
      .card:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
      }
      .card .ava {
        width: 3rem !important;
        height: 3rem !important;
        margin: 0 !important;
        margin-right: 1em !important;
        border-radius: 4px;
        flex-shrink: 0;
      }
      .card .card-header {
        font-style: italic;
        overflow: hidden;
        width: 100%;
      }
      .card .card-header .card-title {
        font-style: normal;
        color: #608dbd;
        font-weight: bold;
      }
      .card:hover .card-header .card-title {
        color: #d480aa;
      }
      .card .card-header .info {
        font-style: normal;
        color: #a3a3a3;
        font-size: 14px;
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
      }
      /* 媒体查询：小屏幕 */
      @media (max-width: 768px) {
        .card {
          width: 100%; /* 在小屏幕上显示为单列 */
          float: none; /* 清除浮动 */
        }
      }
    </style>
    <div class="links-content">
      <div class="link-navigation">
        <a class="card" href="https://veronalo.github.io" target="_blank">
          <img
            class="ava"
            src="https://veronalo.github.io/images/avatar.webp"
          />
          <div class="card-header">
            <div>
              <span class="card-title">vero的小窝</span>
            </div>
            <div class="info">室友的小窝</div>
          </div>
        </a>
        <a class="card" href="https://twitter.com/" target="_blank">
          <img
            class="ava"
            src="https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png"
          />
          <div class="card-header">
            <div>
              <span class="card-title">Twitter</span>
            </div>
            <div class="info">社交分享平台</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

