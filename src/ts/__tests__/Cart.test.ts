import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});



test('new card Book', () => {
  const cart = new Cart();
  const expected = { id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225 };
  const received = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(received).toBe(expected);
});

test('new card MusicAlbum', () => {
  const cart = new Cart();
  const received = cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const expected = { id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900 };
  expect(received).toEqual(expected);
});

test('new card Movie', () => {
  const cart = new Cart();
  const received = cart.add(new Movie(959, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения', '137 мин./02:17'));
  const expected = { id: 959, name: 'Мстители', price: 1000, yearRelease: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: 'фантастика, боевик, фэнтези, приключения', time: '137 мин./02:17' };
  expect(received).toBe(expected);
});


test('getSum', () => {
  const cart = new Cart();
  const received = cart.getSum();
  const expected = 3900;
  expect(received).toEqual(expected);
});
