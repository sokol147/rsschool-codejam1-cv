module.exports = {
    root: './build',
    source: {
        html: './source/template/pages/*.pug',
        js: './source/js/app.js',
        jsLibs: './source/js/_libs/**/*.*',
        css: './source/style/app.scss',
        img: './source/images/**/*.*',
        fonts: './source/fonts/**/*.*',
        documents: 'source/documents/**/*.*',
        spriteImg: './source/sprite/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteImgRetina: './source/sprite/*@2x.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteSvg: './source/sprite/*.svg'

    },
    build: {
        html: './build',
        js: './build/templates/js',
        jsLibs: './build/templates/js/libs',
        css: './build/templates/css',
        img: './build/templates/images',
        fonts: './build/templates/fonts',
        documents: './build/templates/documents',
        spriteImg: './source/images',
        spriteCss:'./source/style/common'
    },
    watch: {
        html: './source/template/**/*.pug',
        js: './source/js/**/*.js',
        jsLibs: './source/js/_libs/**/*.js',
        css: './source/style/**/*.scss',
        img: './source/images/**/*.*',
        fonts: './source/fonts/**/*.*',
        documents: './source/documents/**/*.*',
        spriteImg: './source/sprite/**/*.+(png|gif|jpg|jpeg|PNG|JPG|JPEG)',
        spriteSvg: './source/sprite/**/*.svg',
        content:'./data/**/*.json'
    },
    autoprefixerConfig: ['last 3 version', '> 1%']
};

