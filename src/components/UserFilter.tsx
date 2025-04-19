import React from 'react';

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

const UserFilter: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = e.target.value ? Number(e.target.value) : null;
    onChange(userId);
  };

  return (
    <select
      value={value || ''}
      onChange={handleChange}
      className='user-filter'
    >
      <option value="">Todos los usuarios</option>
      {[...Array(10)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
          Usuario {i + 1}
        </option>
      ))}
    </select>
  );
};

export default UserFilter;