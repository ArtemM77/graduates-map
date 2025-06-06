const doctors = require('../doctors');

describe('doctors data', () => {
  const requiredFields = ['name', 'city', 'clinic_logo', 'photo', 'clinic', 'address', 'lat', 'lng', 'phone', 'site', 'title', 'services'];

  test('all doctors have required fields', () => {
    doctors.forEach(doc => {
      requiredFields.forEach(field => {
        expect(doc[field]).toBeDefined();
      });
    });
  });

  test('phones start with plus', () => {
    doctors.forEach(doc => {
      expect(doc.phone).toMatch(/^\+/);
    });
  });
});
