export default {
  name: 'product',
  title: 'product',
  type: 'document',
  fields: [
    {
      name: 'image',
      tiltle: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    //unique link or ad.
    {
        name:'slug',
        title:'Slug',
        type:'slug',
        options:{
            source:'name',
            maxlength:90,
        }

    },
    {
        name:'price',
        title:'Price',
        type:'number',
    },
    {
        name:'details',
        title:'Details',
        type:'string',
    }
  ],
}
