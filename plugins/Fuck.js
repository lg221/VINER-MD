
const { cmd } = require('../command');
const fetch = require('node-fetch');

const IMAGE_URL = 'https://files.catbox.moe/45z2k7.jpg';

async function fetchThumbnail(url) {
  try {
    const res = await fetch(url);
    return await res.buffer();
  } catch (e) {
    console.error('Image fetch failed:', e);
    return null;
  }
}

// Contact Message
cmd({ pattern: 'fake1', desc: 'Contact quote', react: '📇', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, { text: 'Fake Contact DP' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' },
      message: { contactMessage: { displayName: '<Your Name>', vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:<Your Name>\nTEL:+94767580839\nEND:VCARD`, jpegThumbnail: dp } }
    }
  });
});

// Image Message
cmd({ pattern: 'fake2', desc: 'Image quote', react: '🖼️', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, { text: 'Fake Image Quote' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { imageMessage: { caption: 'Fake Image', jpegThumbnail: dp } }
    }
  });
});

// Link Preview
cmd({ pattern: 'fake3', desc: 'Link preview', react: '🔗', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, {
    text: 'Fake Link Preview',
    contextInfo: {
      forwardingScore: 999, isForwarded: true,
      externalAdReply: {
        title: '<Your Name> Bot', body: 'GitHub Project', mediaType: 1,
        thumbnail: dp, sourceUrl: 'https://github.com/<yourgithub>'
      }
    }
  });
});

// Document Message
cmd({ pattern: 'fake4', desc: 'Document quote', react: '📄', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Fake Document' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { documentMessage: { title: '<Your Name>.pdf', fileName: '<yourname>', mimetype: 'application/pdf' } }
    }
  });
});

// Sticker Message
cmd({ pattern: 'fake5', desc: 'Sticker quote', react: '🪄', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Fake Sticker' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { stickerMessage: { fileSha256: Buffer.alloc(32), fileEncSha256: Buffer.alloc(32), mediaKey: Buffer.alloc(32), mimetype: 'image/webp' } }
    }
  });
});

// Video Message
cmd({ pattern: 'fake6', desc: 'Video quote', react: '🎞️', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, { text: 'Fake Video' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { videoMessage: { caption: 'Fake Video', jpegThumbnail: dp } }
    }
  });
});

// Audio Message
cmd({ pattern: 'fake7', desc: 'Audio quote', react: '🎵', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Fake Audio' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { audioMessage: { mimetype: 'audio/ogg; codecs=opus', seconds: 1, ptt: true } }
    }
  });
});

// Button Message
cmd({ pattern: 'fake8', desc: 'Button quote', react: '🎛️', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, {
    text: 'Fake Button',
    footer: '<Your Name>',
    buttons: [{ buttonId: 'btn1', buttonText: { displayText: 'Click Me' }, type: 1 }],
    headerType: 1,
    jpegThumbnail: dp
  });
});

// Template Message
cmd({ pattern: 'fake9', desc: 'Template quote', react: '📋', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, {
    text: 'Fake Template',
    footer: '<Your Name>',
    templateButtons: [{ index: 1, urlButton: { displayText: 'Visit', url: 'https://github.com' } }],
    jpegThumbnail: dp
  });
});

// Order Message
cmd({ pattern: 'fake10', desc: 'Order quote', react: '🛍️', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Fake Order' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { orderMessage: { itemCount: 1, status: 1, surface: 1, message: '<Your Name> Order', orderTitle: 'Sample Order', sellerJid: '94760000000@s.whatsapp.net' } }
    }
  });
});

// Extended Text
cmd({ pattern: 'fake11', desc: 'Extended Text', react: '📢', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Extended message here' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { extendedTextMessage: { text: 'Fake extended text' } }
    }
  });
});

// Live Location
cmd({ pattern: 'fake12', desc: 'Live Location', react: '📍', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Live Location' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { liveLocationMessage: { degreesLatitude: 6.9271, degreesLongitude: 79.8612, accuracyInMeters: 1, sequenceNumber: 1, timeOffset: 0 } }
    }
  });
});

// List Message
cmd({ pattern: 'fake13', desc: 'List preview', react: '📑', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, {
    text: 'List Menu',
    footer: '<Your Name>',
    title: 'Select Option',
    buttonText: 'Click Here',
    sections: [{ title: 'Menu', rows: [{ title: 'Fake 1', rowId: 'fake1' }] }],
    jpegThumbnail: dp
  });
});

// Product Message
cmd({ pattern: 'fake14', desc: 'Product card', react: '💳', category: 'fun', filename: __filename }, async (conn, m) => {
  const dp = await fetchThumbnail(IMAGE_URL);
  await conn.sendMessage(m.chat, {
    product: {
      productImage: { jpegThumbnail: dp },
      productId: '12345',
      title: '<Your Name> Premium',
      currencyCode: 'LKR',
      priceAmount1000: 150000,
      productImageCount: 1
    }
  }, { quoted: m });
});

// Group Invite
cmd({ pattern: 'fake15', desc: 'Group invite quote', react: '👥', category: 'fun', filename: __filename }, async (conn, m) => {
  await conn.sendMessage(m.chat, { text: 'Group Invite' }, {
    quoted: {
      key: { fromMe: false, participant: '0@s.whatsapp.net' },
      message: { groupInviteMessage: { groupJid: '120363025988763610@g.us', inviteCode: '1234567890', groupName: '<Your Name>' } }
    }
  });
});
