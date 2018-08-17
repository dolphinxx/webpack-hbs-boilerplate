# Glossary of Terminology

# 术语表

#### Amplitude

#### 振幅

Amplitude is the highest value of a wave. 

振幅是波的最高值。

#### Audio-Rate

#### 音频码率

Values that can be automated and scheduled on a single sample level.

可以在单个样本级别上自动化和计划的值。

see [Sampling Rate](#sampling-rate).

#### Beat

#### 拍子

The beat is the basic unit of time, the pulse. A regularly repeating event. 

拍子是时间的基本单位，即脉冲。一个规则的重复的事件。

#### Bar

#### 小节

see [Measure](#measure). 

#### Buffer

#### 缓冲

A buffer is an array of audio data. Typically values are in the range of +1 to -1. 

缓冲是一个音频数据的数组。通常，值在+1和-1范围内。

#### Bus

A bus is an audio pathway that allows you to move a sound from one part of the mixer to another. [[link](http://audiogeekzine.com/2008/09/understanding-sends-auxes-and-buses/)]. 

总线是一种音频通道，允许你将声音从调音台的一部分移到另一部分。[[link](http://audiogeekzine.com/2008/09/understanding-sends-auxes-and-buses/)].

#### Callback

#### 回调函数

A callback is a function that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time. [[link](http://en.wikipedia.org/wiki/Callback_%28computer_programming%29)]

回调函数是作为参数传递给其它代码的函数，期望在某个方便的时候回调（执行）参数。[[link](http://en.wikipedia.org/wiki/Callback_%28computer_programming%29)]

#### Compressor

#### 压缩器

Dynamic range compression or simply compression reduces the volume of loud sounds or amplifies quiet sounds by narrowing or "compressing" an audio signal's dynamic range. 

动态范围压缩或简单压缩通过缩小或“压缩”音频信号的动态范围来减少大声音量或放大安静音量。

#### Convolution

#### 卷积

Convolution is a process used for simulating the reverberation or effects. It is based on the mathematical convolution operation, and uses a pre-recorded audio sample of the impulse response of the space being modeled. [[link](http://en.wikipedia.org/wiki/Convolution_reverb)]

卷积是用于模拟混响或效果的过程。它基于数学卷积运算，并使用预先记录的被建模空间的脉冲响应的音频样本。 [[link](http://en.wikipedia.org/wiki/Convolution_reverb)]

#### Decibel

#### 分贝

A Decibel is a logarithmic ratio between two values. Since we perceive loudness on a logarithmic scale, decibels are a useful quantifier for volume. [[link](http://www.soundonsound.com/sos/1994_articles/feb94/decibels.html)]

分贝是两个值之间的对数比。由于我们通过对数刻度来感知响度，分贝是音量好用的量词。

#### Dry/Wet Control

#### 干/湿控制

"Dry" signal is the unprocessed, "clean" signal, while "wet" signal has effects or processes applied to it. the Dry/Wet knob cross-fades between the two signals. 

“干”信号是未经处理的“干净”信号，而“湿”信号则是被加过效果或处理过的信号。干/湿旋钮在两个信号之间交叉淡入淡出。

#### Envelope

#### 信封

Temporal control over the loudness and spectral content of a sound. [[link](http://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope)]

对声音的音量和频谱内容进行时间控制。 [[link](http://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope)]

#### Feedback

#### 反馈

Feeding the signal back into itself. For audio effects this is only effective if there is a delay signal in the mix, otherwise it leads to uncontrolled positive feedback. 

将信息反馈回自身。对于音频效果，这仅在混音中存在延迟信号时才有效，否则会导致不受控制的积极反馈。

#### Filter

#### 过滤器

Audio Filters amplify or attenuate an incoming signal based on its frequency. Common types are "lowpass" which only let frequencies below the "cutoff" pass through, and highpass which only lets high frequencies pass through. [[link](http://en.wikipedia.org/wiki/Audio_filter)]

音频过滤器根据频率放大或衰减输入信号。常见的类型有“低通”，只允许低于“截止”值的频率通过，而“高通”则只让高频率通过。[[link](http://en.wikipedia.org/wiki/Audio_filter)]

#### Gain

#### 增益

Gain is the ratio between the input and the output value of a signal. Volume and gain are related in that gain controls the volume, but volume is about the loudness of an acoustic signal as it's coming out of a speaker, gain a multiplication of any signal. 

增益是信号的输入和输出值之间的比率。音量和增益是相关的，增益控制音量，但是音量是指声音信号从扬声器中传出来时的响度，获得任意信号的乘量增益。

#### LFO

#### 低频振荡器

An Low Frequency Oscillator (LFO) is any oscillator with a frequency of less than 20 or 30hz. These are often used as control signals to modulate synthesis or effects parameters to produce effects such as vibrato, tremolo and phasing. [[link](http://en.wikipedia.org/wiki/Low-frequency_oscillation)]

低频振荡器是任何频率低于20或30hz的振荡器。这些通常被用来当作调幅合成或影响参数的控制信号以产生诸如（揉弦）颤音、（拨弦）颤音和调相之类的效果

vibrato颤音是一种有规律的声音效果，原理是利用音符有规律的细微而短促的音高变化而产生的。这项技术多年来让音乐富有表现力并增加了音乐的色彩感。vibrato有两种参数，深度（音高变化的总量）和速度（音高变化的速度）。

tremolo则代表的是另外一个方面，它是一种震动或者说是颤抖的效果，原理是制造音符的细微短促的音量变化。这项技术在乐器界已经有了上百年的历史。但在当代，这项技术被更多的改进，并使用在音箱设计中，tremolo拥有与vibrato相似的参数，包括深度（音量变化的总量）和速度（音量变化的速度）。这两个参数同时也会被标成rate比率和intensity强度。

#### Mid/Side

#### 中/侧

Mid/Side processing separates the the 'mid' signal (which comes out of both the left and the right channel) and the 'side' (which only comes out of the the side channels) and effects them separately before being recombined. 

中/侧处理将“中”信号（来自左右声道）和“侧”（仅来自侧声道）分开，并在重新组合之前单独添加特效。

#### Measure

#### 小节

A segment of time corresponding to a specific number of beats (the number of beats is determined by the [time signature](#time-signature). Dividing music into bars provides regular reference points to pinpoint locations within a piece of music.

对应于特定节拍数的时间段（节拍数由[time signature](#time-signature)确定）。将音乐划分为小节提供常规参考点以精确定位一段音乐中的位置。

#### Monophonic

#### 单声道

A monophonic synthesizer plays only one note at a time. see [Polyphonic](#polyphonic). 

单声道合成器一次只能播放一个音符。见[Polyphonic](#polyphonic)。

#### Polyphonic

#### 复音合成器

A polyphonic synthesizer can play multiple notes at once. see [Monophonic](#monophonic). 

复音合成器可以一次播放多个音符。见[Monophonic](#monophonic)。

#### Ramp

#### 渐变

Like an animation tween for audio, a ramp is a smooth interpolation of value over a duration of time. 

与音频的动画补间一样，渐变是在一段时间内平滑的插值。

#### Sampling Rate

#### 采样率

Sampling is the reduction of a continuous analog audio signal to a discrete signal. Typically audio is sampled at over 40,000 times per second as a consequence of the Nyquist Theorem. [[link](http://en.wikipedia.org/wiki/Sampling_%28signal_processing%29#Audio_sampling)]

采样是将连续模拟音频信号减少为离散信号。通常，根据Nyquist Theorem定理，音频每秒采样超过40000次。 [[link](http://en.wikipedia.org/wiki/Sampling_%28signal_processing%29#Audio_sampling)]

#### Signal

#### 信号

A signal is an [audio-rate](#audio-rate) value which can be used to carry sound waves or [sample-rate](#sampling-rate) control data. 

信号是[audio-rate](#audio-rate)的值，可用于搭载声波或[sample-rate](#sampling-rate)控制数据。

#### ScriptProcessorNode

The ScriptProcessorNode (now deprecated) was a Web Audio API standard for doing DSP in Javascript. While extremely powerful, the ScriptProcessorNode incurs a large performance and latency penalty. 

#### Synthesis

#### 合成

Electrical or digital signals which represent sound. 

表示声音的电信号或数字信号。

#### Time Signature

#### 拍号

Specifies how many [beats](#beat) are to be contained in each bar. 

指定每个小节中的节拍数[beats](#beat)。

#### Transport

#### 运送（演奏时音频像传送带输送）

The transport refers to the controls over play/pause/stop/rewind in a [Digital Audio Workstation](http://en.wikipedia.org/wiki/Digital_audio_workstation). 

xx指对[Digital Audio Workstation](http://en.wikipedia.org/wiki/Digital_audio_workstation)中播放/暂停/停止/倒带的控制。
