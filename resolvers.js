const resolvers = {
  Query: {
    info: () => 'This is the info',

    // items: (parent, args, context) => {
    //   return context.prisma.item.findMany({})
    // }
  }
}

module.exports = resolvers
