import React from 'react';
import { render } from '@testing-library/react-native';
import ArticleItem from '../ArticleItem';

test('отображается заголовок', () => {
  const mockArticle = { title: 'Test Title', description: '', urlToImage: null };
  const { getByText } = render(<ArticleItem article={mockArticle} onPress={() => {}} />);
  expect(getByText('Test Title')).toBeTruthy();
});