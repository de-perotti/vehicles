describe('Loading', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load home page', async () => {
    await expect(element(by.text('Lista'))).toBeVisible();
  });
});
