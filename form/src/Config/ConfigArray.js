export const Personal = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: "[A-Za-z]{1,}",
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: "[A-Za-z]{0,}",
        input_type: 'text',
        required: false,

    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: "[A-Za-z]{1,}",
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'PhoneNumber',
        name: 'phoneNumber',
        input_type: 'text',
        validation: '[0-9]{10}',
        required: true,
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Mailing Adress',
        name: 'adress',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Is the residence adress same as mailing adress?',
        name: 'sameAdress',
        input_type: 'select',
        values: [
            'yes',
            'no'
        ],
        required: true,

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
        validation: {
            min: 0
        },
        required: true,

    },
    {
        placeholder: 'Months',
        name: 'monthsLived',
        input_type: 'number',
        validation: {
            min: 0,
            max: 12
        },
        required: true,
    }
]

export const Business = [
    {
        placeholder: 'First Name',
        name: 'firstName',
        validation: "[A-Za-z]{1,}",
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Middle Name(Optional)',
        name: 'middleName',
        validation: "[A-Za-z]{0,}",
        input_type: 'text',
        required: false,

    },
    {
        placeholder: 'Last Name',
        name: 'lastName',
        validation: "[A-Za-z]{1,}",
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'PhoneNumber',
        name: 'phoneNumber',
        input_type: 'text',
        validation: '[0-9]{10}',
        required: true,
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Reletionship to Business',
        name: 'relationBusiness',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Business Name',
        name: 'businessName',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Business Adress',
        name: 'adress',
        input_type: 'text',
        required: true,

    },
    {
        placeholder: 'Industry',
        name: 'industry',
        input_type: 'text',
        required: true,

    }

]