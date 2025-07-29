import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  not_one_of as excluded,
  max,
  max_value as maxVal,
  min,
  min_value as minVal,
  numeric,
  required,
} from '@vee-validate/rules'
import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm,
} from 'vee-validate'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('numeric', numeric)
    defineRule('passwords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${ctx.field} must be a valid email.`,
          min_value: `The field ${ctx.field} must be at least ${ctx.rule.params[0]}.`,
          max_value: `The field ${ctx.field} must be at most ${ctx.rule.params[0]}.`,
          numeric: `The field ${ctx.field} must be a number.`,
          passwords_mismatch: `The passwords don't match.`,
          excluded: `The value of the field ${ctx.field} is not allowed.`,
          country_excluded: `Due to restrictions, we do not accept users from this location.`,
          tos: `You must accept the Terms of Service.`,
        }
        return messages[ctx.rule.name] || `The field ${ctx.field} is invalid.`
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    })
  },
}
