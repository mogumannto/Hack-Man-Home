// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');

// style.scssをタスクを作成する
gulp.task('default', function () {
  // scssファイルを監視
  gulp.watch('src/scss/**/*.scss', function () {

    // scssファイルを取得
    gulp.src('src/scss/index.scss')
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      })
      // Sassのコンパイルエラーを表示
      .on('error', sass.logError))
      // cssフォルダー以下に保存
      .pipe(gulp.dest('docs/css/build'));
  });
});

