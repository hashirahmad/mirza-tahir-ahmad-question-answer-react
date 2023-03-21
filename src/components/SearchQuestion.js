/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   SearchQuestion.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Hashir <hashir@coinmode.com>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/21 20:26:04 by Hashir            #+#    #+#             */
/*   Updated: 2023/03/21 22:29:55 by Hashir           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import api from './Api';

export default function SearchQuestion({ handleQuestionSelected }) {
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    (async () => {
        if (search) {
            const response = await api.searchSuggestions({ search })
            setLoading(false)
            setQuestions([...response.ok.content]);
        } else {
            setQuestions([])
            setLoading(false)
        }

    })();
  }, [loading, search]);

  React.useEffect(() => {
    if (!open) {
      setQuestions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="SearchQuestion"
      sx={{ width: 600 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={(e) => {
        setOpen(false);
        const index = parseInt(e.target.getAttribute('data-option-index'))
        const questionObject = questions[index]
        handleQuestionSelected({ questionObject })
      }}
      onInputChange={(e) => {
        e.preventDefault()
        setLoading(true)
        setSearch(e.target.value)
      }}
      isOptionEqualToValue={(option, value) => option.question === value.question}
      getOptionLabel={(option) => option.question}
      options={questions}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your religious curiosity"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
