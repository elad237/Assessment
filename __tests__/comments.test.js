import getComments from '.getcomments.js';

describe('Add tests for comments counter', () => {
  it('Three Comments in a movie - Output: 3', async () => {
    const commentsNumber = await getComments(53881); // Run the function
    expect(commentsNumber.length).toEqual(3); // Make an assertion on the result
  });

  it('No Comments in a movie - Output: Undefined', async () => {
    const commentsNumber = await getComments(538851); // To Run the function
    expect(commentsNumber.length).toEqual(undefined); // To Make an assertion on the result
  });

  it('One Comments in a movie - Output: 1', async () => {
    const commentsNumber = await getComments(36306); // To Run the function
    expect(commentsNumber.length).toEqual(1); // To Make an assertion on the result
  });
});
