//Test that the related IDs are coming back from the server.
//expect props.ids to be an array
//expect props.ids to be an array of number || string elements
describe('RelatedItems component', function() {
  it('should on initial load have a prop that is an array of IDs', function() {
    expect(this.props.ids).to.be.an.instanceof(Array);
    expect(this.props.ids[0]).to.be.an.instanceof(Number); //might be a string and not a number
  })
})