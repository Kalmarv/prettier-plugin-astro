import { test } from '../test-utils';

const files = import.meta.glob('/test/fixtures/other/*/*', {
	assert: { type: 'raw' },
});

test('Can format an Astro file with frontmatter', files, 'other/frontmatter');

test('Can format an Astro file with embedded JSX expressions', files, 'other/embedded-expr');

test(
	'Can format an Astro file with a `<!DOCTYPE html>` + embedded JSX expressions',
	files,
	'other/doctype-with-embedded-expr'
);

// // note(drew): this should be fixed in new Parser. And as this is an HTML4 / deprecated / extreme edge case, probably fine to ignore?
// test.failing('Can format an Astro file with `<!DOCTYPE>` with extraneous attributes', Prettier, 'doctype-with-extra-attributes');

test('Can format an Astro file with fragments', files, 'other/fragment');

test(
	'Can format an Astro file with a JSX expression in an attribute',
	files,
	'other/attribute-with-embedded-expr'
);

test(
	'Can format an Astro file with a JSX expression and an HTML Comment',
	files,
	'other/expr-and-html-comment'
);

// test.failing('an Astro file with an invalidly unclosed tag is still formatted', Prettier, 'unclosed-tag');

test(
	'Can format an Astro file with components that are the uppercase version of html elements',
	files,
	'other/preserve-tag-case'
);

test('Autocloses open tags.', files, 'other/autocloses-open-tags');

test('Can format an Astro file with a script tag inside it', files, 'other/with-script');

// // Supports various prettier ignore comments
// test('Can format an Astro file with a HTML style prettier ignore comment: https://prettier.io/docs/en/ignore.html', Prettier, 'prettier-ignore-html');

test(
	'Can format an Astro file with a JS style prettier ignore comment: https://prettier.io/docs/en/ignore.html',
	files,
	'other/prettier-ignore-js'
);

// // note(drew): this _may_ be covered under the 'prettier-ignore-html' test. But if any bugs arise, let’s add more tests!
// test.todo("properly follow prettier' advice on formatting comments");

// // note(drew): I think this is a function of Astro’s parser, not Prettier. We’ll have to handle helpful error messages there!
// test.todo('test whether invalid files provide helpful support messages / still try to be parsed by prettier?');

test('Format spread operator', files, 'other/spread-operator');

test('Can format nested comment', files, 'other/nested-comment');

test('Format binary expressions', files, 'other/binary-expression');

test('Format directives', files, 'other/directive');
