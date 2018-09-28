import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
// import SearchResult from '../components/SearchResult'
import SearchItem from '../components/SearchItem'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

var tsUrl = "https://images.reverb.com/image/upload/s--TYm3-glE--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1504988871/judmx1iczrxolaudhf9g.png";
// let searchResult = new SearchResult("1", "Tubescreamer OD", "360.000", {tsUrl});
storiesOf('ML Search result')//.add('mock', () => <SearchResult id="1" title="Tubescreamer OD" price="360.000" thumbnail={tsUrl}/>);
.add('mock', () => <SearchItem id="1" title="Tubescreamer OD" price="360.000" thumbnail={tsUrl}/>);

