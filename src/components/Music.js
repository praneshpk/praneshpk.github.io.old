import React, { useEffect } from 'react';

import './Music.scss';

export default function Music() {
  return (
    <section id="music">
      <div className="Music">
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=531407267/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/" seamless><a href="http://randomgreasyboy.bandcamp.com/album/burgeoning">Burgeoning by RGB</a></iframe>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=317259776/size=large/bgcol=ffffff/linkcol=f171a2/minimal=true/transparent=true/" seamless><a href="http://raundhaus.bandcamp.com/album/inferior-goods">Inferior Goods by RGB</a></iframe>
        <iframe scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/383612864&color=%23848484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=781237821/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://praenesh.bandcamp.com/album/three">THREE by praenesh</a></iframe>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=4241076834/size=large/bgcol=ffffff/linkcol=e99708/minimal=true/transparent=true/" seamless><a href="http://praenesh.bandcamp.com/album/scraps">SCRAPS by praenesh</a></iframe>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2343658863/size=large/bgcol=ffffff/linkcol=7137dc/minimal=true/transparent=true/" seamless><a href="http://fauxfleurs.bandcamp.com/album/higher-delight">Higher Delight by Faux Fleurs</a></iframe>
      </div>
    </section>
  );
}
