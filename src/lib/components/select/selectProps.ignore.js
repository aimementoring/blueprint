import PropTypes from 'prop-types';

export const selectProps = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChangeFunction: PropTypes.func,
  isMulti: PropTypes.bool,
  error: PropTypes.bool,
  isClearable: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  styles: PropTypes.shape({
    control: PropTypes.shape({}),
    menu: PropTypes.shape({}),
    menuList: PropTypes.shape({}),
    input: PropTypes.shape({}),
    singleValue: PropTypes.shape({}),
  }),
  joinValues: PropTypes.bool,
  defaultValues: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  borderColor: PropTypes.string,
  borderColorInError: PropTypes.string,
};

export const selectDefaultProps = {
  onChangeFunction: () => { },
  isMulti: false,
  error: false,
  isClearable: false,
  disabled: false,
  searchable: true,
  styles: {
    control: {},
    menu: {},
    menuList: {},
    input: {},
    singleValue: {},
  },
  joinValues: false,
  defaultValues: [],
  borderColor: '#550d94',
  borderColorInError: '#DC143C',
};
