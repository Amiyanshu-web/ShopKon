const products = [
  {
    _id: '1',
    name:'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70',
    description:'This Canon Camera gives you the freedom to explore different ways to shoot subjects. It packs a multitude of shooting options which you can incorporate in still images to create art that embodies the exact mood and vision you are going for. Don’t worry about the lighting conditions of a place because this camera’s large-sized sensor is designed to capture picture-perfect shots even in a dimly lit environment. Thanks to its Wi-Fi connectivity and NFC paring options, sharing photos is as simple as it gets.',
    brand:'Canon',
    category:'Electronics',
    price:1299.99,
    countInStock:10,
    rating:4.5,
    numReviews:12
  },
  {
    _id: '2',
    name:'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70',
    description:'This Canon Camera gives you the freedom to explore different ways to shoot subjects. It packs a multitude of shooting options which you can incorporate in still images to create art that embodies the exact mood and vision you are going for. Don’t worry about the lighting conditions of a place because this camera’s large-sized sensor is designed to capture picture-perfect shots even in a dimly lit environment. Thanks to its Wi-Fi connectivity and NFC paring options, sharing photos is as simple as it gets.',
    brand:'Canon',
    category:'Electronics',
    price:1299.99,
    countInStock:10,
    rating:4.5,
    numReviews:12
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  
  {
    _id: '7',
    name:'Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70',
    description:'This Canon Camera gives you the freedom to explore different ways to shoot subjects. It packs a multitude of shooting options which you can incorporate in still images to create art that embodies the exact mood and vision you are going for. Don’t worry about the lighting conditions of a place because this camera’s large-sized sensor is designed to capture picture-perfect shots even in a dimly lit environment. Thanks to its Wi-Fi connectivity and NFC paring options, sharing photos is as simple as it gets.',
    brand:'Canon',
    category:'Electronics',
    price:1299.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,
  },
  {
    _id: '8',
    name:'Canon EOS M50 Mirrorless Camera Body + 18-55mm IS II Lens (Black)',
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfn2Mow8SmmCcVA0iscBVmuDysoMjf_eVfOLOpfmfUED0Y3-j9joQZREPYEJei6HrVw28AEk01sg&usqp=CAc',
    description:'The Canon EOS M50 Mirrorless Camera is the perfect choice for a variety of shooting situations. It features a large-format sensor, which allows you to capture images in a wide variety of lighting conditions. It also features a large-angle lens, which allows you to capture images in a wide range of subjects. The M50 also features a built-in Wi-Fi connectivity and NFC pairing options, which makes sharing photos easy.',
    brand:'Canon',
    category:'Electronics',
    price:1299.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,
  },
  {
    _id: '9',
    name:'Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70',
    description:'The Canon EOS 200D II DSLR Camera is the perfect choice for a variety of shooting situations. It features a large-format sensor, which allows you to capture images in a wide variety of lighting conditions. It also features a large-angle lens, which allows you to capture images in a wide range of subjects. The M50 also features a built-in Wi-Fi connectivity and NFC pairing options, which makes sharing photos easy.',
    brand:'Canon',
    category:'Electronics',
    price:1499.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,
  },
  {
    _id: '10',
    name:'NIKON Z5 Mirrorless Camera 24-200 mm  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70',
    description:'The Nikon Z5 is a compact, compact-body mirrorless camera with a 24-200mm f/3.5-5.6-Z ED VR lens. It features a large-format sensor, which allows you to capture images in a wide variety of lighting conditions. It also features a large-angle lens, which allows you to capture images in a wide range of subjects. The M50 also features a built-in Wi-Fi connectivity and NFC pairing options, which makes sharing photos easy.',
    brand:'Nikon',
    category:'Electronics',
    price:1999.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,
  },
  {
    _id: '11',
    name:'SONY ALPHA A7R II Mirrorless Camera 24-105 mm  (Black)',
    image:'data:image/png;base64,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',
    description:'The Sony Alpha A7R II is a compact, compact-body mirrorless camera with a 24-105mm f/3.5-5.6-Z ED VR lens. It features a large-format sensor, which allows you to capture images in a wide variety of lighting conditions. It also features a large-angle lens, which allows you to capture images in a wide range of subjects. The M50 also features a built-in Wi-Fi connectivity and NFC pairing options, which makes sharing photos easy.',
    brand:'Sony',
    category:'Electronics',
    price:1999.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,

  },
  {
    _id: '12',
    name:'SONY Alpha 7M3K Mirrorless Camera Body with 28 - 70 mm Zoom Lens  (Black)',
    image:'https://rukminim1.flixcart.com/image/416/416/kw9krrk0/dslr-camera/q/l/w/-original-imag8z5wwaqtq9bz.jpeg?q=70',
    description:'The Sony Alpha 7M3K is a compact, compact-body mirrorless camera with a 28-70mm f/2.8-4.0-Z ED VR lens. It features a large-format sensor, which allows you to capture images in a wide variety of lighting conditions. It also features a large-angle lens, which allows you to capture images in a wide range of subjects. The M50 also features a built-in Wi-Fi connectivity and NFC pairing options, which makes sharing photos easy.',
    brand:'Sony',
    category:'Electronics',
    price:1999.99,
    countInStock:10,
    rating:4.5,
    numReviews:12,
    
  }
]

export default products
