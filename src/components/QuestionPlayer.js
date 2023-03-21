/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   QuestionPlayer.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Hashir <hashir@coinmode.com>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/21 21:41:15 by Hashir            #+#    #+#             */
/*   Updated: 2023/03/21 22:28:22 by Hashir           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import ReactAudioPlayer from 'react-audio-player';

export default function QuestionPlayer({ questionObject }) {
    return (
        questionObject ? 
        <ReactAudioPlayer
            style={{marginTop: '10px'}}
            src={questionObject.mp3}
            autoPlay={true}
            controls={true}
        /> : <></>
    );
  }