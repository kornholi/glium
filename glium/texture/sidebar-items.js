initSidebarItems({"enum":[["ClientFormat","List of client-side pixel formats."],["CompressedFormat","List of compressed texture formats."],["CompressedMipmapsOption","Describes what to do about mipmaps during compressed texture creation."],["CompressedSrgbFormat","List of compressed pixel formats in the sRGB color space."],["DepthFormat","List of formats available for depth textures."],["DepthStencilFormat","List of formats available for depth-stencil textures."],["InternalFormat","Internal format of a texture."],["InternalFormatType","Format of a component of an internal format."],["MipmapsOption","Describes what to do about mipmaps during texture creation."],["SrgbFormat","List of uncompressed pixel formats that contain floating-point data in the sRGB color space."],["StencilFormat","List of formats available for stencil textures."],["TextureCreationError","Error that can happen when creating a texture."],["TextureFormat","Format of the internal representation of a texture."],["TextureMaybeSupportedCreationError","Error that can happen when creating a texture which we don't know whether it is supported."],["TextureType","Type of a texture."],["UncompressedFloatFormat","List of uncompressed pixel formats that contain floating-point-like data."],["UncompressedIntFormat","List of uncompressed pixel formats that contain signed integral data."],["UncompressedUintFormat","List of uncompressed pixel formats that contain unsigned integral data."]],"struct":[["CompressedSrgbTexture1d","A compressed one-dimensional texture  containing sRGB floating-point data."],["CompressedSrgbTexture1dArray","An array of compressed one-dimensional textures  containing sRGB floating-point data."],["CompressedSrgbTexture1dArrayLayer","Represents a single layer of a `CompressedSrgbTexture1dArray`."],["CompressedSrgbTexture1dArrayMipmap","Represents a single mipmap level of a `CompressedSrgbTexture1dArray`."],["CompressedSrgbTexture1dMipmap","Represents a single mipmap level of a `CompressedSrgbTexture1d`."],["CompressedSrgbTexture2d","A compressed two-dimensional texture  containing sRGB floating-point data."],["CompressedSrgbTexture2dArray","An array of compressed two-dimensional textures  containing sRGB floating-point data."],["CompressedSrgbTexture2dArrayLayer","Represents a single layer of a `CompressedSrgbTexture2dArray`."],["CompressedSrgbTexture2dArrayMipmap","Represents a single mipmap level of a `CompressedSrgbTexture2dArray`."],["CompressedSrgbTexture2dMipmap","Represents a single mipmap level of a `CompressedSrgbTexture2d`."],["CompressedSrgbTexture3d","A compressed three-dimensional texture  containing sRGB floating-point data."],["CompressedSrgbTexture3dMipmap","Represents a single mipmap level of a `CompressedSrgbTexture3d`."],["CompressedTexture1d","A compressed one-dimensional texture  containing floating-point data."],["CompressedTexture1dArray","An array of compressed one-dimensional textures  containing floating-point data."],["CompressedTexture1dArrayLayer","Represents a single layer of a `CompressedTexture1dArray`."],["CompressedTexture1dArrayMipmap","Represents a single mipmap level of a `CompressedTexture1dArray`."],["CompressedTexture1dMipmap","Represents a single mipmap level of a `CompressedTexture1d`."],["CompressedTexture2d","A compressed two-dimensional texture  containing floating-point data."],["CompressedTexture2dArray","An array of compressed two-dimensional textures  containing floating-point data."],["CompressedTexture2dArrayLayer","Represents a single layer of a `CompressedTexture2dArray`."],["CompressedTexture2dArrayMipmap","Represents a single mipmap level of a `CompressedTexture2dArray`."],["CompressedTexture2dMipmap","Represents a single mipmap level of a `CompressedTexture2d`."],["CompressedTexture3d","A compressed three-dimensional texture  containing floating-point data."],["CompressedTexture3dMipmap","Represents a single mipmap level of a `CompressedTexture3d`."],["DepthStencilTexture1d","A one-dimensional texture  containing both depth and stencil data."],["DepthStencilTexture1dArray","An array of one-dimensional textures  containing both depth and stencil data."],["DepthStencilTexture1dArrayLayer","Represents a single layer of a `DepthStencilTexture1dArray`."],["DepthStencilTexture1dArrayMipmap","Represents a single mipmap level of a `DepthStencilTexture1dArray`."],["DepthStencilTexture1dMipmap","Represents a single mipmap level of a `DepthStencilTexture1d`."],["DepthStencilTexture2d","A two-dimensional texture  containing both depth and stencil data."],["DepthStencilTexture2dArray","An array of two-dimensional textures  containing both depth and stencil data."],["DepthStencilTexture2dArrayLayer","Represents a single layer of a `DepthStencilTexture2dArray`."],["DepthStencilTexture2dArrayMipmap","Represents a single mipmap level of a `DepthStencilTexture2dArray`."],["DepthStencilTexture2dMipmap","Represents a single mipmap level of a `DepthStencilTexture2d`."],["DepthStencilTexture2dMultisample","A two-dimensional texture  containing both depth and stencil data."],["DepthStencilTexture2dMultisampleArray","An array of two-dimensional textures  containing both depth and stencil data."],["DepthStencilTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `DepthStencilTexture2dMultisampleArray`."],["DepthStencilTexture2dMultisampleMipmap","Represents a single mipmap level of a `DepthStencilTexture2dMultisample`."],["DepthStencilTexture3d","A three-dimensional texture  containing both depth and stencil data."],["DepthStencilTexture3dMipmap","Represents a single mipmap level of a `DepthStencilTexture3d`."],["DepthTexture1d","A one-dimensional texture  containing depth data."],["DepthTexture1dArray","An array of one-dimensional textures  containing depth data."],["DepthTexture1dArrayLayer","Represents a single layer of a `DepthTexture1dArray`."],["DepthTexture1dArrayMipmap","Represents a single mipmap level of a `DepthTexture1dArray`."],["DepthTexture1dMipmap","Represents a single mipmap level of a `DepthTexture1d`."],["DepthTexture2d","A two-dimensional texture  containing depth data."],["DepthTexture2dArray","An array of two-dimensional textures  containing depth data."],["DepthTexture2dArrayLayer","Represents a single layer of a `DepthTexture2dArray`."],["DepthTexture2dArrayMipmap","Represents a single mipmap level of a `DepthTexture2dArray`."],["DepthTexture2dMipmap","Represents a single mipmap level of a `DepthTexture2d`."],["DepthTexture2dMultisample","A two-dimensional texture  containing depth data."],["DepthTexture2dMultisampleArray","An array of two-dimensional textures  containing depth data."],["DepthTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `DepthTexture2dMultisampleArray`."],["DepthTexture2dMultisampleMipmap","Represents a single mipmap level of a `DepthTexture2dMultisample`."],["DepthTexture3d","A three-dimensional texture  containing depth data."],["DepthTexture3dMipmap","Represents a single mipmap level of a `DepthTexture3d`."],["IntegralTexture1d","A one-dimensional texture  containing signed integral data."],["IntegralTexture1dArray","An array of one-dimensional textures  containing signed integral data."],["IntegralTexture1dArrayLayer","Represents a single layer of a `IntegralTexture1dArray`."],["IntegralTexture1dArrayMipmap","Represents a single mipmap level of a `IntegralTexture1dArray`."],["IntegralTexture1dMipmap","Represents a single mipmap level of a `IntegralTexture1d`."],["IntegralTexture2d","A two-dimensional texture  containing signed integral data."],["IntegralTexture2dArray","An array of two-dimensional textures  containing signed integral data."],["IntegralTexture2dArrayLayer","Represents a single layer of a `IntegralTexture2dArray`."],["IntegralTexture2dArrayMipmap","Represents a single mipmap level of a `IntegralTexture2dArray`."],["IntegralTexture2dMipmap","Represents a single mipmap level of a `IntegralTexture2d`."],["IntegralTexture2dMultisample","A two-dimensional texture  containing signed integral data."],["IntegralTexture2dMultisampleArray","An array of two-dimensional textures  containing signed integral data."],["IntegralTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `IntegralTexture2dMultisampleArray`."],["IntegralTexture2dMultisampleMipmap","Represents a single mipmap level of a `IntegralTexture2dMultisample`."],["IntegralTexture3d","A three-dimensional texture  containing signed integral data."],["IntegralTexture3dMipmap","Represents a single mipmap level of a `IntegralTexture3d`."],["RawImage1d","Represents raw data for a two-dimensional image."],["RawImage2d","Represents raw data for a two-dimensional image."],["RawImage3d","Represents raw data for a two-dimensional image."],["SrgbTexture1d","A one-dimensional texture  containing sRGB floating-point data."],["SrgbTexture1dArray","An array of one-dimensional textures  containing sRGB floating-point data."],["SrgbTexture1dArrayLayer","Represents a single layer of a `SrgbTexture1dArray`."],["SrgbTexture1dArrayMipmap","Represents a single mipmap level of a `SrgbTexture1dArray`."],["SrgbTexture1dMipmap","Represents a single mipmap level of a `SrgbTexture1d`."],["SrgbTexture2d","A two-dimensional texture  containing sRGB floating-point data."],["SrgbTexture2dArray","An array of two-dimensional textures  containing sRGB floating-point data."],["SrgbTexture2dArrayLayer","Represents a single layer of a `SrgbTexture2dArray`."],["SrgbTexture2dArrayMipmap","Represents a single mipmap level of a `SrgbTexture2dArray`."],["SrgbTexture2dMipmap","Represents a single mipmap level of a `SrgbTexture2d`."],["SrgbTexture2dMultisample","A two-dimensional texture  containing sRGB floating-point data."],["SrgbTexture2dMultisampleArray","An array of two-dimensional textures  containing sRGB floating-point data."],["SrgbTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `SrgbTexture2dMultisampleArray`."],["SrgbTexture2dMultisampleMipmap","Represents a single mipmap level of a `SrgbTexture2dMultisample`."],["SrgbTexture3d","A three-dimensional texture  containing sRGB floating-point data."],["SrgbTexture3dMipmap","Represents a single mipmap level of a `SrgbTexture3d`."],["StencilTexture1d","A one-dimensional texture  containing stencil data."],["StencilTexture1dArray","An array of one-dimensional textures  containing stencil data."],["StencilTexture1dArrayLayer","Represents a single layer of a `StencilTexture1dArray`."],["StencilTexture1dArrayMipmap","Represents a single mipmap level of a `StencilTexture1dArray`."],["StencilTexture1dMipmap","Represents a single mipmap level of a `StencilTexture1d`."],["StencilTexture2d","A two-dimensional texture  containing stencil data."],["StencilTexture2dArray","An array of two-dimensional textures  containing stencil data."],["StencilTexture2dArrayLayer","Represents a single layer of a `StencilTexture2dArray`."],["StencilTexture2dArrayMipmap","Represents a single mipmap level of a `StencilTexture2dArray`."],["StencilTexture2dMipmap","Represents a single mipmap level of a `StencilTexture2d`."],["StencilTexture2dMultisample","A two-dimensional texture  containing stencil data."],["StencilTexture2dMultisampleArray","An array of two-dimensional textures  containing stencil data."],["StencilTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `StencilTexture2dMultisampleArray`."],["StencilTexture2dMultisampleMipmap","Represents a single mipmap level of a `StencilTexture2dMultisample`."],["StencilTexture3d","A three-dimensional texture  containing stencil data."],["StencilTexture3dMipmap","Represents a single mipmap level of a `StencilTexture3d`."],["Texture1d","A one-dimensional texture  containing floating-point data."],["Texture1dArray","An array of one-dimensional textures  containing floating-point data."],["Texture1dArrayLayer","Represents a single layer of a `Texture1dArray`."],["Texture1dArrayMipmap","Represents a single mipmap level of a `Texture1dArray`."],["Texture1dMipmap","Represents a single mipmap level of a `Texture1d`."],["Texture2d","A two-dimensional texture  containing floating-point data."],["Texture2dArray","An array of two-dimensional textures  containing floating-point data."],["Texture2dArrayLayer","Represents a single layer of a `Texture2dArray`."],["Texture2dArrayMipmap","Represents a single mipmap level of a `Texture2dArray`."],["Texture2dMipmap","Represents a single mipmap level of a `Texture2d`."],["Texture2dMultisample","A two-dimensional texture  containing floating-point data."],["Texture2dMultisampleArray","An array of two-dimensional textures  containing floating-point data."],["Texture2dMultisampleArrayMipmap","Represents a single mipmap level of a `Texture2dMultisampleArray`."],["Texture2dMultisampleMipmap","Represents a single mipmap level of a `Texture2dMultisample`."],["Texture3d","A three-dimensional texture  containing floating-point data."],["Texture3dMipmap","Represents a single mipmap level of a `Texture3d`."],["TextureAny","A texture whose type isn't fixed at compile-time."],["TextureAnyMipmap","Represents a specific mipmap of a texture."],["TextureSurface","Struct that allows you to draw on a texture."],["UnsignedTexture1d","A one-dimensional texture  containing unsigned integral data."],["UnsignedTexture1dArray","An array of one-dimensional textures  containing unsigned integral data."],["UnsignedTexture1dArrayLayer","Represents a single layer of a `UnsignedTexture1dArray`."],["UnsignedTexture1dArrayMipmap","Represents a single mipmap level of a `UnsignedTexture1dArray`."],["UnsignedTexture1dMipmap","Represents a single mipmap level of a `UnsignedTexture1d`."],["UnsignedTexture2d","A two-dimensional texture  containing unsigned integral data."],["UnsignedTexture2dArray","An array of two-dimensional textures  containing unsigned integral data."],["UnsignedTexture2dArrayLayer","Represents a single layer of a `UnsignedTexture2dArray`."],["UnsignedTexture2dArrayMipmap","Represents a single mipmap level of a `UnsignedTexture2dArray`."],["UnsignedTexture2dMipmap","Represents a single mipmap level of a `UnsignedTexture2d`."],["UnsignedTexture2dMultisample","A two-dimensional texture  containing unsigned integral data."],["UnsignedTexture2dMultisampleArray","An array of two-dimensional textures  containing unsigned integral data."],["UnsignedTexture2dMultisampleArrayMipmap","Represents a single mipmap level of a `UnsignedTexture2dMultisampleArray`."],["UnsignedTexture2dMultisampleMipmap","Represents a single mipmap level of a `UnsignedTexture2dMultisample`."],["UnsignedTexture3d","A three-dimensional texture  containing unsigned integral data."],["UnsignedTexture3dMipmap","Represents a single mipmap level of a `UnsignedTexture3d`."]],"trait":[["PixelValue","A trait that must be implemented for any type that can represent the value of a pixel."],["Texture","Trait that describes a texture."],["Texture1dDataSink","Trait that describes types that can be built from one-dimensional texture data."],["Texture1dDataSource","Trait that describes data for a one-dimensional texture."],["Texture2dDataSink","Trait that describes types that can be built from two-dimensional texture data."],["Texture2dDataSource","Trait that describes data for a two-dimensional texture."],["Texture3dDataSink","Trait that describes types that can be built from one-dimensional texture data."],["Texture3dDataSource","Trait that describes data for a two-dimensional texture."]]});