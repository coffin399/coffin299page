# My Portfolio - coffin299

これは、`coffin299(ごみぃ)`のスキルと制作物を紹介するための個人ポートフォリオサイトです。

**デモサイトURL:** <https://coffin399.github.io/coffin299page/>

---

## コンセプト

AIコーダーおよび3DCGアーティストとしての自身のスキルセットと、これまでに制作したプロジェクトを分かりやすく紹介することを目的としています。モダンでインタラクティブなデザインを意識し、訪問者に興味を持ってもらえるようなサイトを目指しました。

---

## ✨ 特徴

*   **レスポンシブデザイン**: PC、タブレット、スマートフォンなど、あらゆるデバイスで最適に表示されます。
*   **ダークモード対応**: デフォルトでダークモード、ライトモードの切り替えが可能。設定はページ間で一貫して保持されます。
*   **水色のアクセントカラー**: モダンで洗練された水色（Cyan）のアクセントカラーを使用。
*   **インタラクティブなUI**: スムーズなアニメーションとホバーエフェクトで快適なユーザー体験を提供。
*   **整理されたページ構成**: 「Home」「About」「Portfolios」「Contact」の各ページで情報を整理。
*   **GitHub Pages対応**: 自動デプロイ機能付きで簡単に公開可能。

---

## 🛠️ 使用技術

このポートフォリオは、以下の技術を使用して構築されています。

*   **HTML5**: サイトの基本的な構造を定義しています。
*   **CSS3**:
    *   モダンなレイアウト（Flexbox, Grid Layout）
    *   CSS変数（Custom Properties）による効率的なスタイル管理
    *   アニメーション（`@keyframes`）
    *   背景ぼかし（`backdrop-filter`）
*   **JavaScript (ES6+)**:
    *   ダークモード/ライトモードの切り替え機能
    *   テーマ設定の永続化（LocalStorage）
    *   ページ間でのテーマ同期
    *   スクロール連動のアニメーション（Intersection Observer API）
*   **Font Awesome**: 各種アイコンの表示に使用しています。
*   **GitHub Pages**: ホスティングとデプロイに使用しています。

---

## 🚀 セットアップとデプロイ

### ローカル環境での確認方法

1.  このリポジトリをクローンまたはダウンロードします。
    ```bash
    git clone https://github.com/coffin299/coffin299page.git
    ```
2.  プロジェクトディレクトリに移動します。
    ```bash
    cd coffin299page
    ```
3.  `index.html` ファイルをブラウザで開きます。

### GitHub Pagesでの公開

1. **リポジトリの設定**:
   - GitHubリポジトリの「Settings」→「Pages」に移動
   - Sourceを「GitHub Actions」に設定

2. **自動デプロイ**:
   - `main`ブランチにプッシュすると、GitHub Actionsが自動実行され、サイトが更新されます
   - `.nojekyll`ファイルにより、Jekyllの処理を無効化

3. **手動デプロイ**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

4. **公開URL**:
   - `https://[ユーザー名].github.io/coffin299page/` でアクセス可能

---

## ✒️ 今後の展望

*   各プロジェクトの詳細ページを追加
*   3DCG作品を閲覧できるギャラリー機能の実装
*   コンタクトフォームのバックエンド連携強化（Formspreeなど）

---

## ©️ ライセンス

このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
