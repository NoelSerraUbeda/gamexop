module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      surname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      images: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
      },
      deletedAt: {
        type: Date
      }
    },
    { timestamps: true }
  )

  const Client = mongoose.model('Client', schema, 'clients')
  return Client
}
