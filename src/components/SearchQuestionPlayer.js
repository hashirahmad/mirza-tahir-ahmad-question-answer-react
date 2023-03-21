/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   SearchQuestionPlayer.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Hashir <hashir@coinmode.com>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/21 21:47:03 by Hashir            #+#    #+#             */
/*   Updated: 2023/03/21 21:58:28 by Hashir           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import QuestionPlayer from "./QuestionPlayer";
import SearchQuestion from "./SearchQuestion";
import * as React from 'react';

export default function SearchQuestionPlayer() {
    const [selectedQuestionObject, setSelectedQuestionObject] = React.useState(null);

    const handleQuestionSelected = ({ questionObject }) => {
        setSelectedQuestionObject(questionObject)
    }

    return (
        <div>
            <SearchQuestion handleQuestionSelected={handleQuestionSelected} />
            <QuestionPlayer questionObject={selectedQuestionObject} />
        </div>
    );
  }