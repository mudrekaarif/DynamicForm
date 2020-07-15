export const Personal = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: { pattern: "[A-Za-z]{1,}", required: true },
        input_type: 'text'

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: { pattern: "[A-Za-z]{1,}", required: false },
        input_type: 'text'
    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: { pattern: "[A-Za-z]{1,}", required: true },
        input_type: 'text'
    },
    {
        placeholder: 'PhoneNumber',
        name: 'phoneNumber',
        input_type: 'phoneNumber',
        validation: { required: true }
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        validation: { required: true }
    },
    {
        placeholder: 'Mailing Adress',
        name: 'adress',
        input_type: 'text',
        validation: { required: true }
    },
    {
        placeholder: 'Is the residence adress same as mailing adress?',
        name: 'sameAdress',
        input_type: 'select',
        values: [
            'yes',
            'no'
        ],
        validation: { required: true }

    },
    {
        placeholder: 'How long has the insured lived at their current adress?',
        name: 'display1',
        input_type: 'display_text'
    },
    {
        placeholder: 'Years',
        name: 'yearsLived',
        input_type: 'number',
        validation: { required: true, min: 0 }

    },
    {
        placeholder: 'Months',
        name: 'monthsLived',
        input_type: 'number',
        validation: {
            min: 0,
            max: 12,
            required: true,
        },
    }
]

export const Business = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: { pattern: "[A-Za-z]{1,}", required: true },
        input_type: 'text'

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: { pattern: "[A-Za-z]{1,}", required: false },
        input_type: 'text'
    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: { pattern: "[A-Za-z]{1,}", required: true },
        input_type: 'text'
    },
    {
        placeholder: 'PhoneNumber',
        name: 'phoneNumber',
        input_type: 'phoneNumber',
        validation: { required: true }
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        validation: { required: true }
    },
    {
        placeholder: 'Reletionship to Business',
        name: 'relationBusiness',
        input_type: 'text',
        validation: { required: true }

    },
    {
        placeholder: 'Business Name',
        name: 'businessName',
        input_type: 'text',
        validation: { required: true }

    },
    {
        placeholder: 'Business Adress',
        name: 'adress',
        input_type: 'text',
        validation: { required: true }

    },
    {
        placeholder: 'Industry',
        name: 'industry',
        input_type: 'text',
        validation: { required: true }
    }

]